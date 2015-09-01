// var ProfileHabProgress = React.createClass({
//   render: function() {
//     var results = this.props.habitudes;
//     return (
//       <div><h3>Habits in Progress</h3>
//         <ul>
//           {results.map(function(result) {
//             return <li key={result.id}>{result}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
// })

// React.render(<ProfileHabProgress habitudes={['12/30 day streak',"29/30 day streak","7/30 day streak"]} />, document.getElementById("habprogress"))

var ProfileHabProgress = React.createClass({
  getInitialState: function() {
    return {
      hab: 'Dasdsa'
    };
  },

  componentDidMount: function() {
    // console.log('this.props : ',this.props)
    // console.log('habitudes : ',this.props.habitudes)
    // console.log('this. state : ', this.state)
    $.get(this.props.habitudes, function(result) {
      // console.log('result',result)
      this.setState({hab : result});
      // console.log('thing ', thing)
      // console.log('this.state.hab inside didmount',this.state.hab);

    }.bind(this));
  },

  render: function() {
    console.log('this.state.hab',this.state.hab)
    // var results = this.state.hab;
    // console.log('thing2 :',this.habitudes)
    
      
    return (
   
   <div>
      <h3>Habits in Progress</h3>
        <ul> {this.state.hab}</ul>
    </div>
       
    );
  }
})
          // {this.state.hab.map(function(result) {
            // return <li key={result.id}>{result}</li>;
          // })}

React.render(<ProfileHabProgress habitudes={'http://localhost:3000/api/habits'} />, document.getElementById("habprogress"))