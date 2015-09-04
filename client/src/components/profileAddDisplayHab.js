var Habit = React.createClass({
  render: function() {
  var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="habit">
        <h2 className="user_id">{this.props.user_id}</h2>
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
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleHabitSubmit: function(habit) {
    var habits = this.state.data;
    var newHabits = habits.concat([habit]);
    this.setState({data: newHabits});
    $.ajax({
      url: '/api/habits',
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
    this.loadHabitsFromServer();
    setInterval(this.loadHabitsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="habitBox">
        <h1>Habit Tracker</h1>
        <HabitList data={this.state.data} />
        <HabitForm onHabitSubmit={this.handleHabitSubmit} />
      </div>
    );
  }
});

var HabitList = React.createClass({

  updateHabit: function(habit, update){

    $.ajax({
      url: '/api/updateHabit',
      type: 'POST',
      data: habit,
      dataType: 'json',
      success: function(data) {
        
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  render: function() {

  var habitNodes = this.props.data.map(function(habit, index) {
  if (habit.count === undefined) {
    habit.count = 0;
  }
    return (
      <table><tbody>
      <tr><td>
        <button type="submit" formmethod="post" onClick={this.updateHabit.bind(this, habit)}>Check-in</button></td><td>
        <Habit user_id={habit.user_id} key={index}>
        {habit.habit+' '+(habit.count-1)} 
        </Habit>
        </td></tr>
        </tbody></table>
        );
    }.bind(this));
    return (
      <div className="HabitList">{habitNodes}</div>
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
      <input type="text" placeholder="Enter text" ref="habit" />
      <input type="submit" value="Post" />
    </form>
    );
  }
});

React.render(<ProfileAddDisplayHab url={'/api/updateHabit'} pollInterval={2000} habitsObj={{}}/>, document.getElementById("adddisplayhab"));



