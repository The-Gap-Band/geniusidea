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
      hab: 'Dadadadadadada'
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
    // console.log('this.state.hab',this.state.hab)
    // var results = this.state.hab;
    // console.log('thing2 :',this.habitudes)
    var habList = this.state.hab;
    console.log('habList',habList)
    
    for (var i = 0; i < habList.length; i++) {
      if (typeof habList[i] !== 'string'){

        this.props.example.push(habList[i])
      }  
    };  
    console.log('this.props.example',this.props.example)


    return (
   
   <div>
      <h3>Habits in Progress</h3>
        <ul>{this.props.example.map(function(obj) {
          console.log('obj-------',obj.habit)
          return <li key={obj.id}>{obj.habit}</li>;
        })}</ul>
    </div>
       
    );
  }
})
        // <ul>{habList.map(function(obj) {
        //     return <li key={obj.id}>{obj.habit}</li>;
        //   })}</ul>






React.render(<ProfileHabProgress example={[]} habitudes={'http://localhost:3000/api/habits'} />, document.getElementById("habprogress"))







