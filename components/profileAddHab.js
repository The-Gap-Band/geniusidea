// var helper = require('./helpers/restHelper.js');

var ProfileAddHab = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },

  componentDidMount: function() {
    $.post(this.props.link, function(result) {
      this.setState({value : result}); // setting the current state to the result of the db-query
    }.bind(this));
  },
  
  handleChange: function(event) {
    this.setState({value: event.target.value});
    // console.log('value: ', this.state.value);
  },
  clear: function(event){
    this.setState({value: ''});
  },
  addItem: function(e){ //what happens when press enter after inputting text into text field
    e.preventDefault();
    this.props.habitsObj.newHabit = this.state.value;
    console.log('habitsObj : ',this.props.habitsObj);

    // console.log('Inside addItem function');

    // Need to figure out how get value of input
    // and make an AJAX call with input as JSON input
  },
  render: function() {
    var value = this.state.value;

    for (var i = 0; i < value.length; i++) {
      this.props.foo.push(value[i])
    };
    
    return (
      <div>
        <h1>{this.props.habitsObj.newHabit}</h1>
        <form onSubmit={this.addItem}><input type="text" value={value} onChange={this.handleChange} onClick={this.clear} id="user_input"/>
        <button>Enter Habitude</button></form>
      </div>
    );
  }
});

React.render(<ProfileAddHab foo={[]} link={'http://localhost:3000/api/habits'} habitsObj={{}}/>, document.getElementById("addhab"))



///////////

//array of JSON objects for habits
// var data = [
//   {author: "Pete Hunt", text: "This is one comment"},
//   {author: "Jordan Walke", text: "This is *another* comment"}
// ];

// // 
// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//         <h1>Comments</h1>
//         <CommentList data={this.props.data} />
//         <CommentForm />
//       </div>
//     );
//   }
// });