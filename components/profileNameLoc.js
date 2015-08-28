var ProfileNameLoc = React.createClass({
	render: function(){
		return (
      <div>
        <h1>ProfileName: {this.props.name}</h1>
        <p>{this.props.location}</p>

      </div>)
	}
})

React.render(<ProfileNameLoc name="Robert Sylvester Kelly" location="Berkeley, CA"/>, document.getElementById("nameloc"))
