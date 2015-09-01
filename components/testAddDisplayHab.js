var Habit = React.createClass({
 render: function() {
  console.log('this ',this)
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
     return (
     <div className="habit">
       <h2 className="user_id">
         {this.props.user_id}
       </h2>
       <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
     </div>
   );
 }
});
var ProfileAddDisplayHab = React.createClass({ //habit BOX
  loadHabitsFromServer: function() {
    $.ajax({
     url: this.props.url,
     dataType: 'json',
     cache: false,
     success: function(data) {
       this.setState({data: data});
       console.log('data',data);
     }.bind(this),
     error: function(xhr, status, err) {
        console.log('FUCKING ERRORRRR!!!!!!!')
       console.error(this.props.url, status, err.toString());
     }.bind(this)
    });
  },
  handleHabitSubmit: function(habit) {
   var habits = this.state.data;
   var newHabits = habits.concat([habit]);
   this.setState({data: newHabits});
   $.ajax({
     url: this.props.url,
     dataType: 'json',
     type: 'POST',
     data: habit,
     success: function(data) {
       this.setState({data: data});
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(this.props.url, status, err.toString());
     }.bind(this)
   });
 },

  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    // this.setState({data : ''}); 
    this.loadHabitsFromServer();
    setInterval(this.loadHabitsFromServer, this.props.pollInterval);
  },
  render: function() {
    console.log('this.state.data ',this.state.data)
    return (
      <div className="habitBox">
         <h1>habitssssssss</h1>
         <HabitList data={this.state.data} />
         <HabitForm onHabitSubmit={this.handleHabitSubmit} />
     </div>
    );
  }
});
       // <HabitForm onHabitSubmit={this.handleHabitSubmit} />


var HabitList = React.createClass({
 render: function() {
  console.log('this.props from HabitList func',this.props)
   var habitNodes = this.props.data.map(function(habit, index) {
     return (
       // `key` is a React-specific concept and is not mandatory for the
       // purpose of this tutorial. if you're curious, see more here:
       // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
       <Habit user_id={habit.user_id} key={index}>
         {habit.habit}
       </Habit>
     );
   });
   return (
     <div className="HabitList">
       {habitNodes}
     </div>
   );
 }
});

var HabitForm = React.createClass({
 handleSubmit: function(e) {
   e.preventDefault();
   
   var habit = React.findDOMNode(this.refs.habit).value.trim();
   if (!habit) {
     return;
   }
   this.props.onHabitSubmit({habit: habit});
   
   React.findDOMNode(this.refs.habit).value = '';
 },
 render: function() {
   return (
     <form className="habitForm" onSubmit={this.handleSubmit}>
       
       <input type="text" placeholder="Say something...creepy..." ref="habit" />
       <input type="submit" value="Post" />
     </form>
   );
 }
});


React.render(<ProfileAddDisplayHab url={'http://localhost:3000/api/habits'} pollInterval={2000} habitsObj={{}}/>, document.getElementById("addhab"))

