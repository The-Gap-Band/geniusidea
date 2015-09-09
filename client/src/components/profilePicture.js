var ProfilePicture = React.createClass({
	render: function(){
		return (<img className="profilepic" src={'http://40.media.tumblr.com/tumblr_makm5yaqVk1r8b83ro1_500.jpg'} />) // pulls the image for user's profile
	}
})
// TODO: photo needs to be queried from db of users'profile photos
React.render(<ProfilePicture/>, document.getElementById("picture"))




