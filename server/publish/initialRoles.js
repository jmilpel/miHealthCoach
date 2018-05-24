Meteor.startup(function () {
	if(Meteor.users.find() < 1){
		var id = Accounts.createUser({
			email: 'admin@admin.com',
			password: 'adminadmin',
			profile: {name: 'Administrador'}
		});
				
		Roles.addUsersToRoles(id,'admin');
	}
});
