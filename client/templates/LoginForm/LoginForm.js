Template.LoginForm.events({
	'submit #loginForm': function () {
		event.preventDefault();

		var username = event.target.username.value;
		var password = event.target.password.value;

		Meteor.loginWithPassword(username, password, function(error){
			if(!error){
				console.log("You initiated the login process.");	
			}
    		else{
    			console.log(error);
    		}
		})
	},

	'submit #registerForm': function () {
		event.preventDefault();

		var username = event.target.RegisterUsername.value;
		var email = event.target.RegisterEmail.value;
		var password = event.target.RegisterPassword.value;

		Accounts.createUser({
			email:email,
			password:password,
			profile: {name:username}
		});
	}
});