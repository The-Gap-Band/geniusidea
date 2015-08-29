var ProfileHabProgress = React.createClass({
  render: function() {
    var results = this.props.habitudes;
    return (
      <div><h3>Check in for todays goals</h3>
        <ul>
          {results.map(function(result) {
            return <li key={result.id}>{result}</li>;
          })}
        </ul>
      </div>
    );
  }
})

React.render(<ProfileHabProgress habitudes={['12/30 day streak',"29/30 day streak","7/30 day streak"]} />, document.getElementById("habprogress"))
