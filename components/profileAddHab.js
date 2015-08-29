var ProfileAddHab = React.createClass({
  getInitialState: function() {
    return {value: 'Add new Habitudes'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    console.log('value :',value)
  },
  clear: function(event){
    this.setState({value: null});
  },
  foo: function(e){
    e.preventDefault();
    console.log('HELLOOOOOOOOOOOOOOOOO')
  },
  render: function() {

    var value = this.state.value;
    return (
      <div>
        <form onSubmit={this.foo}><input type="text" value={value} onChange={this.handleChange} onClick={this.clear} id="user_input"/>
        <button type="button">Enter Habitude</button></form>

        

      </div>
    );
  }
    
  
});

React.render(<ProfileAddHab />, document.getElementById("addhab"))


//     function howMany(){
//       var message_entered =  document.getElementById("user_input").value
//       document.getElementById('display').innerHTML = message_entered;
//     }
// <input type="submit" onclick="howMany();">
//         <p><span id='display'></span> </p>
// function delcaration
// <script>
//   function howMany(){
//     var message_entered =  document.getElementById("user_input").value
//     document.getElementById('display').innerHTML = message_entered;
//   }
// </script>

// where to enter number
// <form>
//   <label><b>Enter how many minutes</b></label>
//   <input type="text" name="message" id="user_input">
// </form>

// where to display number
//   <input type="submit" onclick="howMany();"><br />
//   <label>To how many Ignitions</label>
//   <p><span id='display'></span> </p>