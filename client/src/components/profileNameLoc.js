// var ProfileNameLoc = React.createClass({
// 	render: function(){
// 		return (
//       <div>
//         <h1>ProfileName: {this.props.name}</h1>
//         <p>{this.props.location}</p>
//       </div>)
// 	}
// })
// // TODO: name and location needs to be queried form the db
// React.render(<ProfileNameLoc name="Robert Sylvester Kelly" location="Berkeley, CA"/>, document.getElementById("nameloc"))



////////////////////////////
var ProfileNameLoc = React.createClass({
  getInitialState: function(){
    return {}
  },
  loadUserInfoFromServer: function(){
    
  }, //moved ajax call into componentDidMoutn function
  componentDidMount: function(x,y,z) {
    console.log('x,y,z',x,y,z)
    // this.loadUserInfoFromServer();
    $.ajax({
        type: 'GET',
        url: '/api/***', /* NEEDS THE GET REQUEST FOR USERNAME AND LOCATION */
        dataType: 'json',
        success: function(data) {
          
          console.log('username successfully retrieved!')
          this.setState({data:data})
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
          console.log('failed to retrieve username and location from db :( ');
        }.bind(this)
    })
  },
  render: function(){
    return (
      <div>
        <h1>ProfileName: {this.props.name}</h1>
        <p>{this.props.location}</p>
      </div>)
  }
})
// TODO: name and location needs to be queried form the db
React.render(<ProfileNameLoc name="Robert Sylvester Kelly" location="Berkeley, CA"/>, document.getElementById("nameloc"))

