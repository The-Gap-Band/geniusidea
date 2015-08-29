"use strict";

//reference libraries we need to handle our build process
var gulp = require('gulp');
var connect = require('gulp-connect'); //run a local dev server to see app
var open = require('gulp-open'); //open a URL in a web 
var browserify = require('browserify'); //bundles JS
var reactify = require('reactify'); //transforms react jsx to js
var source = require('vinyl-source-stream') //use conventional text streams with gulp
var lint = require('gulp-eslint'); //lint our js files, including jsx

var concat = require('gulp-concat') //create a css task to handle bootstrap


//configuration for gulp
var config = {
 port: 3000,
 devBaseUrl: 'http://localhost',
 paths: {
   //want any html files in src directory to be matched
   html: '*.html', 
   js: './**/*.js',
   // css: [
   //   'node_modules/bootstrap/dist/css/bootstrap.min.css',
   //   'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
   // ],
   dist: './dist',
   appJs: 'app.js'
 }
}


//create tasks

//start a local development server
gulp.task('connect', function() {
 //pack in JSON to configure our server
 connect.server({
   root: ['dist'],
   port: config.port, 
   base: config.devBaseUrl, 
   livereload: true
 });
});

//open a file in the server
 //'connect' is a dependency
 //before running open, first run the task 'connect'
gulp.task('open', ['connect'], function() {
 //point to the file
 gulp.src('dist/index.html')
   //pipe output to 'open'
     //go get index.html and open it in this url
   .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

//handle our html files and move it over to dist
gulp.task('html', function() {
 gulp.src(config.paths.html)
   //pipe html file into 
   .pipe(gulp.dest(config.paths.dist))
   //reload using connect module
   .pipe(connect.reload());
});

//create our js task
gulp.task('js', function() {
 browserify(config.paths.appJs)
   //transform jsx to js
   .transform(reactify)
   //bundle everything we get, put it into one file
   .bundle()
   //will tell us if we have errors
   .on('error', console.error.bind(console))
   //define what our bundle will be named
   .pipe(source('bundle.js'))
   //give a destination for bundle.js
   .pipe(gulp.dest(config.paths.dist + '/scripts'))
   //any time this task runs, reload the browser
   .pipe(connect.reload());
})

//create our css task
// gulp.task('css', function() {
//  gulp.src(config.paths.css)
//    //our goal is to have one bundled css file to save http requests
//    .pipe(concat('bundle.css'))
//    //drop that file under dist folder in css directory
//    .pipe(gulp.dest(config.paths.dist + '/css'));
// });

gulp.task('lint', function() {
 return gulp.src(config.paths.js)
   .pipe(lint({ config: 'eslint.config.json' }))
   .pipe(lint.format());
})

//watch files so every time we make a change, it will reload the browser
gulp.task('watch', function() {
 gulp.watch(config.paths.html, ['html']);
 //every time we change js files, we want to lint also
 gulp.watch(config.paths.js, ['js', 'lint']);
});


//default task will run an array of tasks by default
 //when you type 'gulp' into the command line it will run these tasks
gulp.task('default', ['html', 'js', 'lint', 'open', 'watch']);