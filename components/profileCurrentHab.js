var ProfileCurrentHab = React.createClass({

  render: function() {
    console.log('hellooooooo')
    var results = this.props.list;
    return (
      <ol>
        {results.map(function(result) {
          console.log('key for list item :', <li key={result.id}>{result}</li>)
          return <li key={result.id}>{result}</li>;
        })}
      </ol>
    );
  }
});

React.render(<ProfileCurrentHab list={["Become the best rapper alive","Learn Javascript and stuff","Beat Vy in arm wrestling"]} /> , document.getElementById("currenthab"))



//   var children = React.Children.map(
//     this.props.children,
//     function(child){
//       return <li>{child}</li>;
//     }
//   );
//   return <ul>{children}</ul>; 
//   }
// })

// React.render(<ProfileCurrentHab> learning how to jam <span>playing key-tar</span> learning the neck key-tar</ProfileCurrentHab>, document.getElementById("currenthab"))




