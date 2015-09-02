var ProfileCheckInCurrentHab = React.createClass({

    incrementCount: function(){
      this.setState({
        count: this.state.count + 1
      });
    },

    getInitialState: function() {
      return {data: this.props.data, foo:true, count: 0};
    },

    render: function() {
        return (
          <table><tbody>
            <thead><h3>Check in For Today</h3></thead>
              <form action="" method="get">
                {this.props.currentHabits.map(function(cell) {
                  return <tr><td>{this.state.count}</td><td><button type="button" onClick={this.incrementCount}>Check-in</button> {cell} </td></tr>
                })}
              </form>
          </tbody></table>
        );
    }
});

React.render(<ProfileCheckInCurrentHab currentHabits={["Become the best rapper alive","Learn Javascript and stuff","Get super buff by pumping the iron"]} />,document.getElementById("checkincurrenthab"));


