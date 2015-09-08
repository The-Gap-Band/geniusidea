var ProfileNameLoc = React.createClass({
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
