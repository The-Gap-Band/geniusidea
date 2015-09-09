var ProfileMyStats = React.createClass({
  getInitialState: function() {
      return {data: this.props.data};
  },
  render: function(){
    return (
      <table><tbody>
      <thead><h3>My Stats (completed habits)</h3></thead>
        
          {this.props.finishedHabits.map(function(cell) {
            return <tr>
                 <td>{cell}</td>
            </tr>
          })}
            
      </tbody></table>
    );
  }
})
// TODO: completed stats  are hard-coded, needs to be queried from the db where we store a user's already-completed habits
React.render(<ProfileMyStats finishedHabits={["Get dunked on by Glenn","Beat Vy in arm wrestling"]}/>, document.getElementById("mystats"))

