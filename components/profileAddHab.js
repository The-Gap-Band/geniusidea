var ProfileAddHab = React.createClass({
  getInitialState: function() {
    return {value: 'Add new Habitudes'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    console.log('value :',value)
  },
  clear: function(event){
    this.setState({value: null});
  },
  foo: function(e){
    e.preventDefault();
    console.log('HELLOOOOOOOOOOOOOOOOO')
  },
  render: function() {
    var value = this.state.value;
    return (
      <div>
        <form onSubmit={this.foo}><input type="text" value={value} onChange={this.handleChange} onClick={this.clear} id="user_input"/>
        <button type="button">Enter Habitude</button></form>
      </div>
    );
  }
});

React.render(<ProfileAddHab />, document.getElementById("addhab"))


