// var ProfileCheckInCurrentHab = React.createClass({

//   updateCount: function(update){
//     console.log('Button has been clicked');
//     $.ajax({
//       url: this.props.url,
//       dataType: 'POST',
//       data: update,
//       success: function(data) {
//         this.setState({data: data});
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url, status, err.toString());
//       }.bind(this)
//     });
//   },

//   getInitialState: function() {
//     return {data: []};
//   },

//   render: function() 
//     return (
//       <table><tbody>
//       <thead><h3>Check in For Today</h3></thead>
//       {this.props.currentHabits.map(function(cell) {
//         return <tr><td><button type="submit" formmethod="post" onClick={this.updateCount}>Check-in</button> {cell} </td></tr>
//       }.bind(this)
//       )}  
//       </tbody></table>
//       );
//   }
// });

// React.render(<ProfileCheckInCurrentHab url={'http://localhost:3000/api/updateHabit'} currentHabits={["Become the best rapper alive","Learn Javascript and stuff","Get super buff by pumping the iron"]} />,document.getElementById("checkincurrenthab"));


