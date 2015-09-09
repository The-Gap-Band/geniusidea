var Input = React.createClass ({ // component that creates input fields (ie. username and password)
  render: function (){
    return (
     <div>
       <label>{this.props.label}</label>
       <br/>
       <input type="text" onChange={this.props.valChange} value= {this.props.val} />
       <br/> 
     </div>
    );
  }
 });


 
  var LandingLoginSignUp = React.createClass({
    getInitialState: function(){ // initial state is null
      return {}
    },
    
    submit: function (e){
      var self
      e.preventDefault()
      self = this
      console.log(this.state);
      var data = {
        username: this.state.username,
        password: this.state.password
      }
      // Submit form via jQuery/AJAX
      $.ajax({
        type: 'POST',
        url: '/api/signup',
        dataType: 'json',
        data: data
      })
      .done(function(data) {
        console.log('user successfully added!')
        self.clearForm()
      })
      .fail(function(jqXhr) {
        console.log('failed to register');
      });
    },
    clearForm: function() { // clears the form after data has been submitted
      this.setState({
        username: "",
        password: ""
      });
    },
    newUsername: function(e){ // sets the value of username as the input from the text field
      this.setState({username: e.target.value})
    },
    newPassword: function(e){ // sets the value of password as the input from the text field
     this.setState({password: e.target.value})
    },
    render: function(){
       return (
        <div><form onSubmit={this.submit} >
          <Input label="username:" valChange={this.newUsername} val={this.state.username}/>
          <Input label="password:" valChange={this.newPassword} val={this.state.password}/>

          <button type="submit" onClick={function(){}}>Sign Up</button>
        </form>
        <button type="submit" onClick={function(){}}>Log in</button>
        </div>
      );
    }
});

React.render(<LandingLoginSignUp url={'/api/signup'}/>, document.getElementById('logninsignup'));