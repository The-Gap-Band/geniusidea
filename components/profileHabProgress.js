var ProfileHabProgress = React.createClass({
  render: function() {
    var results = this.props.habitudes;
    return (
      <div><p>Check in for todays goals</p>
        <ul>
          {results.map(function(result) {
            return <li key={result.id}>{result}</li>;
          })}
        </ul>
      </div>
    );
  }
})

React.render(<ProfileHabProgress habitudes={[12,34,56]} />, document.getElementById("habprogress"))
