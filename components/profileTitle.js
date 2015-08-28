var ProfileTitle = React.createClass({
	render: function(){
		return (<h1>ProfileName: {this.props.name}</h1>)
	}
})

React.render(<ProfileTitle name="Albrey Brown"/>, document.getElementById("name"))
