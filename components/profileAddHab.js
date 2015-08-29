var ProfileAddHab = React.createClass({
  getInitialState: function() {
    return {value: 'Add new Habitudes'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    console.log('value: ', this.state.value);
  },
  clear: function(event){
    this.setState({value: ''});
  },
  addItem: function(e){
    e.preventDefault();
    console.log('Inside addItem function');


  },
  render: function() {
    var value = this.state.value;
    return (
      <div>
        <form onSubmit={this.addItem}><input type="text" value={value} onChange={this.handleChange} onClick={this.clear} id="user_input"/>
        <button>Enter Habitude</button></form>
      </div>
    );
  }
});

React.render(<ProfileAddHab />, document.getElementById("addhab"))