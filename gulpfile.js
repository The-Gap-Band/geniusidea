var gulp = require('gulp');

var config = {
	port: 3000,
	url: 'https://localhost',
	paths: {
		html: './*.html',
		js: './*.js',
		css: './*.css',
		dist: './dist'
	}
}

gulp.task('html', function(){
	gulp.src(config.paths.html)
	.pipe(gulp.dest(config.path.dist))
	.pipe(connect.reload())
})

gulp.task('lint',function(){
	return gulp.src(config.paths.js)
	.pipe(lint({config:'eslint.config.json'}))
	.pipe(lint.format())
})

gulp.task('watch',function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
})

gulp.task('default',['html','lint','watch']);