// var helper = require('./helpers/restHelper.js');

var ProfileAddDisplayHab = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },

  // componentDidMount: function() {
  //   $.post(this.props.link, function(result) {
    
  //     this.setState({value : result}); // setting the current state to the result of the db-query
  //   }.bind(this));
  // },
  
  // handleChange: function(event) {

  //   this.setState({value: event.target.value});
  //   // console.log('event: ', event);
  // },
  // clear: function(event){
  //   this.setState({value: ''});
  // },
  addItem: function(e){ //what happens when press enter after inputting text into text field
    e.preventDefault();
    // this.props.habitsObj.habit = this.state.value;
    

    // $.post(this.props.link, function(result) {
    //   this.setState({value : result}); // setting the current state to the result of the db-query
    // console.log('Inside addItem function');
    // }.bind(this));

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: {habit: this.refs.habitValue},
      success: function(data) {
        this.setState({data: data});  
        console.log('AIRHORN!!!!!!')
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('NOOooooooooooo')
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });



    // Need to figure out how get value of input
    // and make an AJAX call with input as JSON input
  },
  render: function() {

    return (
      <div>
        <h1>Add Habits Here</h1>
        <form onSubmit={this.addItem}>
          <input type="text" placeholder="enter habit here" ref="habitValue" />
          <button>Enter Habitude</button></form>
      </div>
    );
  }
});

React.render(<ProfileAddDisplayHab foo={[]} url={'http://localhost:3000/api/habits'} habitsObj={{}}/>, document.getElementById("addhab"))



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