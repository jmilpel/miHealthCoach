Meteor.startup(function () {
	if(Meteor.users.find() < 1){
		var id = Accounts.createUser({
			email: 'admin@admin.com',
			password: 'asdfasdf',
			profile: {name: 'Administrator'}
		});
				
		Roles.addUsersToRoles(id,'admin');
	}
});
