// var $ = require('jquery');

// var UserGist = React.createClass({
//   getInitialState: function() {
//     return {
//       username: '',
//       lastGistUrl: ''
//     };
//   },

//   componentDidMount: function() {
//     console.log('source : ',this.props.source)
//     $.get(this.props.source, function(result) {
//       var lastGist = result[0];
//       if (this.isMounted()) {
//         this.setState({
//           username: lastGist.owner.login,
//           lastGistUrl: lastGist.html_url
//         });
//       }
//     }.bind(this));
//   },

//   render: function() {
//     console.log('this.state : ',this.state)
//     return (
//       <div>
//         {this.state.username}s last gist is
//         <a href={this.state.lastGistUrl}>here</a>.
//       </div>
//     );
//   }
// });

// React.render(
//   <UserGist source="https://api.github.com/users/octocat/gists" />,
//   document.body
// );
// var source = require('testlist.js');
var ImageCollect = React.createClass({
        getInitialState: function() {
          return {
            pImage: []
          };
        },

        componentDidMount: function() {
          var self = this;
          $.get(this.props.source, function(result) {
            var collection = result.data.children;
            if (this.isMounted()) {
              this.setState({
                pImage: collection
              });
            }
          }.bind(this));
        },

        render: function() {
          images = this.state.pImage || [];
          return (
            <div>
              Images: 
              {images.map(function(image){
                  return <img src={image.data.thumbnail}/>
              })}
            </div>
          );
        }
      });

    // React.render(
    // <ImageCollect source="https://www.reddit.com/r/pics/top/.json" />,
    //   document.body
    // );