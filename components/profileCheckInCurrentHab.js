var ProfileCheckInCurrentHab = React.createClass({
    getInitialState: function() {
      return {data: this.props.data, foo:true};
    },
    render: function() {
        return (
          <table><tbody>
            <thead><h3>Check in For Today</h3></thead>
              <form action="" method="get">
                {this.props.currentHabits.map(function(cell) {
                  return <tr><td><input type="checkbox" name="" value="" onChange={function(){console.log('dsdfvsdf')} }/> {cell}</td></tr>
                })}
              </form>
          </tbody></table>
        );
    }
});

React.render(<ProfileCheckInCurrentHab currentHabits={["Become the best rapper alive","Learn Javascript and stuff","Get super buff by pumping the iron"]} />,document.getElementById("checkincurrenthab"));

