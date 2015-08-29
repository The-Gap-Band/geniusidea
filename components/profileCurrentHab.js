// var ProfileCurrentHab = React.createClass({

//   render: function() {
//     var results = this.props.list;
//     return (
//       <div>
//         <thead>Check in for todays goals</thead>
//         <tr>
//           {results.map(function(result) {
//             console.log('result',result)
//             return <td key={result.id}> {result} </td>;
//           })}
//         </tr>
//       </div>
      
//     );
//   }
// });

// React.render(<ProfileCurrentHab list={["Become the best rapper alive","Learn Javascript and stuff","Beat Vy in arm wrestling"]} /> , document.getElementById("currenthab"))



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




        // 




var CustomRow = React.createClass({
    getInitialState: function() {
      return {data: this.props.data};
    },
    render: function() {
        return (
          <table><tbody>
            
              {this.props.currentHabits.map(function(cell) {
                return <tr>
                     <td>{cell}</td>
                </tr>
              })}
                
          </tbody></table>
        );
    }
});



React.render(<CustomRow currentHabits={["Become the best rapper alive","Learn Javascript and stuff","Beat Vy in arm wrestling"]}/>,document.getElementById("currenthab"));




















