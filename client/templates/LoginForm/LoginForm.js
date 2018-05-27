Template.AddPost.events({
	'submit #loginForm': function () {
		event.preventDefault();

		var username = event.target.username.value;
		var password = event.target.password.value;

		Meteor.loginWithPassword(username, password, function(){
    		console.log("You initiated the login process.");
		})
	}
});