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
    return {data: ''}
  }, 
  loadUserInfoFromServer: function(){
    
  }, //moved ajax call into componentDidMoutn function
  componentDidMount: function(x,y,z) {
    // this.loadUserInfoFromServer();
    var foo;
    $.ajax({
        type: 'GET',
        url: '/api/nameAndLoc', /* NEEDS THE GET REQUEST FOR USERNAME AND LOCATION */
        dataType: 'json',
        success: function(data) {
          
          this.setState({data:data})
          // console.log('this.state.data[0].location: ',this.state.data[0].location)
         // this.props.info = this.state.data[0].location;
          console.log('THE DATA : ',data)
          this.props.info = data;
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
          console.log('failed to retrieve username and location from db :( ');
        }.bind(this)
    })
    // var foo = this.state.data[0].location;
    // console.log('fooooooo',foo)
  },


  render: function(state){
    
    console.log('what is your mentalmodel of state?',this.state)
  // console.log('wtf is this shit .props',this.props)
  if (this.state.data[0]){ var loca = this.state.data[0].location;}
  console.log('ESTA LOCA',loca)
  this.props.info = loca;
    return (
      <div>
        <p>NAME: {}</p>
        <p>LOCATION: {this.props.info}</p>
      </div>)
  }
})
// TODO: name and location needs to be queried form the db
React.render(<ProfileNameLoc info={[]}/>, document.getElementById("nameloc"))

