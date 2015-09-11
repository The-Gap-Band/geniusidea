////////////////////////////
// var ProfileNameLoc = React.createClass({
//   getInitialState: function(){
//     return {data: ''}
//   }, 
//   loadUserInfoFromServer: function(){
    
//   }, //moved ajax call into componentDidMount function
//   componentDidMount: function(x,y,z) {
//     // this.loadUserInfoFromServer();
//     var foo;
//     $.ajax({
//         type: 'GET',
//         url: '/api/nameAndLoc', /* NEEDS THE GET REQUEST FOR USERNAME AND LOCATION */
//         dataType: 'json',
//         success: function(data) {
//
//           this.setState({data:data})
//           // console.log('this.state.data[0].location: ',this.state.data[0].location)
//          // this.props.info = this.state.data[0].location;
//           console.log('THE DATA : ',data)
          
//         }.bind(this),
//         error: function(xhr, status, err) {
//           console.error(this.props.url, status, err.toString());
//           console.log('failed to retrieve username and location from db :( ');
//         }.bind(this)
//     })
//   },


//   render: function(state){
    
//     console.log('what is your mentalmodel of state?',this.state)
  
//   // Because of the sequence of function calls (first render, then componentDidMoutn, then render again) at first, this.state is empty until the AJAX GET is called, the following lock the value of this.state.data to the variables loca and name IF it exists at all; So the values from the AJAX GET will be caught/bound to these unchanging variables and assigned to the this.props.info object
//     if (this.state.data[0]){ var loca = this.state.data[0].location; this.props.info['location']=loca}
//     if (this.state.data[0]){ var name = this.state.data[0].username; this.props.info['username']=name}
//     console.log('THIS PROPS INFO',this.props.info);
//     // this.props.info = loca;
//       return (
//         <div>
//           <p>NAME: {this.props.info['username']}</p>
//           <p>LOCATION: {this.props.info['location']}</p>
//         </div>)
//   }
// })

// React.render(<ProfileNameLoc info={{}}/>, document.getElementById("nameloc"))



////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
var ProfileNameLoc = React.createClass({
  getInitialState: function(){ // MAKE SURE TO SET INITIAL STATE TO INCLUDE THE PARAMS OF THE ITEMS YOU NEED FROM THE DB-RETURN-OBJECT DUH
    return {username: '',location: ''}
  }, 
  
  componentDidMount: function(x,y,z) {

    var foo;
    $.ajax({
        type: 'GET',
        url: '/api/nameAndLoc', /* NEEDS THE GET REQUEST FOR USERNAME AND LOCATION */
        dataType: 'json',
        success: function(data) { // After the query has return the object, set the state's parameters to equal the values needed from the db-query-object
          this.setState({
            username: data[0].username, 
            location: data[0].location
          })
          console.log('successfully retrieved username and location from the database!')
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
          console.log('failed to retrieve username and location from db :( ');
        }.bind(this)
    })
  },


  render: function(state){    
    console.log('what is your mental model of state?',this.state);
      return (
        <div>
          <p>NAME: {this.state.username}</p>
          <p>LOCATION: {this.state.location}</p>
        </div>)
  }
})

React.render(<ProfileNameLoc />, document.getElementById("nameloc"))
