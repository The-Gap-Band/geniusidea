// var LoginSignUp = React.createClass({
// 	login: function(){
// 		console.log('existing user LOG IN!!!!!!');
// 	},
// 	signUp: function(usernamePassword){
// 		// checks db for exisiting username
// 		// if username doesnt already exist, inserts new username into users table, and logs new user into their new account
// 		// if username already exists, error message "user w that username already exists"
// 		console.log('new user SIGN UP!!!!!!');
//     console.log('usernamePassword is ****************',usernamePassword)
// 		$.ajax({
//       url: '/api/signup',
//       dataType: 'json',
//       type: 'POST',
//       data: usernamePassword,
//       success: function(data) {
//         this.setState({data: data});
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url, status, err.toString());
//       }.bind(this)
//     });
// 	},
// 	render: function(){
//     var that = this;
// 		return (
// 			<div className="landingPageSignUp">
// 			<h1>LANDINGPAGE</h1><br/>
// 		    Usersname: <input type="text" name="username"/><br/>
// 		    Password: <input type="text" name="password"/><br/>
// 		    <button type="button" onClick={this.login}>LOG IN</button>
// 		    <button type="button" onClick={this.signUp.bind(null, that.usernamePassword)}>SIGN UP</button>
// 		  </div>
// 	  )
// 	}
// });
// React.render(<LoginSignUp url={'/api/signup'}/>, document.getElementById('logninsignup'));


/////////////////////////////////////////////////////////
var BasicInputBox = React.createClass ({
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


 
 var Contact = React.createClass({
    getInitialState: function(){
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
        console.log('user successfully added!!!!')
        self.clearForm()
      })
      .fail(function(jqXhr) {
        console.log('failed to register');
      });

    },

    clearForm: function() {
      this.setState({
        username: "",
        password: ""
      });
    },

    nameChange: function(e){
      this.setState({username: e.target.value})
    },
    
    emailChange: function(e){
     this.setState({password: e.target.value})
    },


    render: function(){
       return (
        <div><form onSubmit={this.submit} >
          <BasicInputBox label="username:" valChange={this.nameChange} val={this.state.username}/>
          <BasicInputBox label="password:" valChange={this.emailChange} val={this.state.password}/>

          <button type="submit" onClick={function(){console.log('peaches and cream')}}>Sign Up</button>
        </form>
        <button type="submit" onClick={function(){console.log('user wants to log in now')}}>Log in</button>
        </div>
      );
    }
});

React.render(<Contact url={'/api/signup'}/>, document.getElementById('logninsignup'));