var ProfileCurrentHab = React.createClass({

  render: function() {
  //   var results = this.props.results;
  //   return (
  //     <ol>
  //       {results.map(function(result) {
  //         return <li >{result}</li>;
  //       })}
  //     </ol>
  //   );
  // }
  var children = React.Children.map(
    this.props.children,
    function(child){
      return <li>{child}</li>;
    }
  );
  return <ul>{children}</ul>; 
  }
})

React.render(<ProfileCurrentHab> <span>learning how to jam</span> <span>playing key-tar</span> <span>learning the neck key-tar</span></ProfileCurrentHab>, document.getElementById("currenthab"))
// this.props.data.participants.map(function(player) {
//    return <li key={player.championId}>{player.summonerName}</li>
// })