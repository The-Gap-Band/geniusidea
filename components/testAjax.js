

var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {
    console.log('source : ',this.props.source)
    $.get(this.props.source, function(result) {
      console.log('result: ',result)
      // if (this.isMounted()) {
      //   this.setState({
      //     username: lastGist.owner.login,
      //     lastGistUrl: lastGist.html_url
      //   });
      // }
    }.bind(this));
  },

  

  render: function() {
    
    return (
      <div>
        {this.state}s last gist is
        <a href={this.state}>here</a>.
      </div>
    );
  }
});

// React.render(
//   <UserGist source='http://localhost:3000/api/habits' />,
//   document.body
// );
// var source = require('testlist.js');
// var ImageCollect = React.createClass({
//         getInitialState: function() {
//           return {
//             pImage: []
//           };
//         },

//         componentDidMount: function() {
//           var self = this;
//           $.get(this.props.source, function(result) {
//             var collection = result.data.children;
//             if (this.isMounted()) {
//               this.setState({
//                 pImage: collection
//               });
//             }
//           }.bind(this));
//         },

//         render: function() {
//           images = this.state.pImage || [];
//           return (
//             <div>
//               Images: 
//               {images.map(function(image){
//                   return <img src={image.data.thumbnail}/>
//               })}
//             </div>
//           );
//         }
//       });

    // React.render(
    // <ImageCollect source="https://www.reddit.com/r/pics/top/.json" />,
    //   document.body
    // );