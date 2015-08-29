var ProfileCheckInCurrentHab = React.createClass({
    getInitialState: function() {
      return {data: this.props.data};
    },
    render: function() {
        return (
          <table><tbody>
            <thead><h3>Check in For Today</h3></thead>
              {this.props.currentHabits.map(function(cell) {
                return <tr>
                     <td>{cell}</td>
                </tr>
              })}
                
          </tbody></table>
        );
    }
});

React.render(<ProfileCheckInCurrentHab currentHabits={["Become the best rapper alive","Learn Javascript and stuff","Get super buff by pumping the iron"]} />,document.getElementById("checkincurrenthab"));




















