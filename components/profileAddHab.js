var ProfileAddHab = React.createClass({
  render: function() {
    var results = this.props.list;
    return (
      <div><p>Check in for todays goals</p>
        <ol>
          {results.map(function(result) {
            return <li key={result.id}>{result}</li>;
          })}
        </ol>
      </div>
    );
  }
});

React.render(<ProfileAddHab list={["xyz","xyz","xyz"]}/>, document.getElementById("addhab"))