var ProfileCheckInCurrentHab = React.createClass({
    getInitialState: function() {
      return {data: this.props.data};
    },
    
    render: function() {
        function check(e){e.preventDefault(); console.log('fwdeifwefdhweiuhfwuhef')}
        return (
          <table><tbody>
            <thead><h3>Check in For Today</h3></thead>
              <form action="" method="get">
                {this.props.currentHabits.map(function(cell) {
                  return <tr><td><input type="checkbox" name="" value="" onChange={check()}/> {cell}</td></tr>
                })}
              </form>
          </tbody></table>
        );
    }
});

React.render(<ProfileCheckInCurrentHab currentHabits={["Become the best rapper alive","Learn Javascript and stuff","Get super buff by pumping the iron"]} />,document.getElementById("checkincurrenthab"));

              // {this.props.currentHabits.map(function(cell) {
              //   return <tr><td>{cell}</td></tr>
              // })}









                // <form action="" method="get">
                //     {this.props.currentHabits.map(function(cell) {
                
                      
                //       return <tr><td><input type="checkbox" name="" value=""> {cell}</td></tr><br>
                      
                //     })}
                  
                //   <input type="submit" value="Submit">
                // </form>








