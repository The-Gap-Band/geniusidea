var LoginSignUp = React.createClass({
	login: function(){
		console.log('existing user LOG IN!!!!!!');
	},
	signUp: function(){
		// checks db for exisiting username
		// if username doesnt already exist, inserts new username into users table, and logs new user into their new account
		// if username already exists, error message "user w that username already exists"
		console.log('new user SIGN UP!!!!!!');
	},
	render: function(){
		return (
			<div className="landingPageSignUp">
			<h1>LANDINGPAGE</h1><br/>
		    Usersname: <input type="text" name="username"/><br/>
		    Password: <input type="text" name="password"/><br/>
		    <button type="button" onClick={this.login}>LOG IN</button>
		    <button type="button" onClick={this.signUp}>SIGN UP</button>
		  </div>
	  )
	}
});
React.render(<LoginSignUp />, document.getElementById('logninsignup'));