var ProfilePicture = React.createClass({
	  getInitialState: function(){ // SET INITIAL STATE TO INCLUDE THE PARAMS OF THE ITEMS YOU NEED FROM THE DB-RETURN-OBJECT 
    return {username: '',location: ''}
  }, 
  
  componentDidMount: function(x,y,z) {

    var foo;
    $.ajax({
        type: 'GET',
        url: '/api/nameAndLoc', /* NEEDS THE GET REQUEST FOR USERNAME AND LOCATION */
        dataType: 'json',
        success: function(data) { // After the query has returned the object, set the state's keys and values to equal the values needed from the db-query-object VERY IMPORTANT
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
	render: function(){
		return (
			<div>
        <img className="profilepic" src={'http://40.media.tumblr.com/tumblr_makm5yaqVk1r8b83ro1_500.jpg'} />
        <p>Hello, {this.state.username}!</p>
        <p>LOCATION: {this.state.location}</p>
      </div>
    ) // pulls the image for user's profile
	}
})
// TODO: photo needs to be queried from db of users'profile photos
React.render(<ProfilePicture/>, document.getElementById("picnameloc"))




