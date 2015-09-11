var ProfileHabProgress = React.createClass({
  getInitialState: function() { // setting initial state to an empty string
    return {
      hab: ''
    };
  },

  componentDidMount: function() {
    $.get(this.props.url, function(result) {
      this.setState({hab : result}); // setting the current state to the result of the db-query
    }.bind(this));
  },

  render: function() {
    var habList = this.state.hab; // capturing the current state and saving in an array
    
    
    for (var i = 0; i < habList.length; i++) {
      this.props.habitudesInProgress.push(habList[i]); // iterating through array of db data and putting into a props, habitudesInProgress' so it can be in scope, see habitudesInProgress defined as empty array in render call
    };  

    return (
   
      <div>
        <h3>Habits in Progress</h3>
          <ul>
            {this.props.habitudesInProgress.map(function(obj) { // iterating through db-data to render to Habits in Progress section of profile
              return <li key={obj.id}>{obj.habit}</li>;
            })}
          </ul>
      </div>
       
    );
  }
})

React.render(<ProfileHabProgress habitudesInProgress={[]} url={'/api/habits'} />, document.getElementById("habprogress"))







