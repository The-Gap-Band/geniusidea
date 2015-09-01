// var helper = require('./helpers/restHelper.js');

var ProfileAddHab = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },

  componentDidMount: function() {
    $.post(this.props.link, function(result) {
      this.setState({value : result}); // setting the current state to the result of the db-query
      console.log('result from add hab',result);
      console.log('this.state.value',this.state.value)
    }.bind(this));
  },
  
  handleChange: function(event) {
    this.setState({value: event.target.value});
    // console.log('value: ', this.state.value);
  },
  clear: function(event){
    this.setState({value: ''});
  },
  addItem: function(e){
    e.preventDefault();
    
    this.props.habitsObj.newHabit = this.state.value;
    // console.log('this.state.value :',this.state.value);
    console.log('habitsObj : ',this.props.habitsObj);
    // helper.post('/api/addHabit',e);
    console.log('Inside addItem function');
    // Need to figure out how get value of input
    // and make an AJAX call with input as JSON input
  },
  render: function() {
    var value = this.state.value;
    console.log('value inside of render',value)
    for (var i = 0; i < value.length; i++) {
      this.props.foo.push(value[i])
    };
    console.log('this.props.foo',this.props.foo)
    console.log('this.props.habitsObj.newHabit',this.props.habitsObj.newHabit)
    //posting to the cirtual DOM!
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