import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
	if(Meteor.users.find().count() < 1){
		var id = Accounts.createUser({
			email: 'admin@admin.com',
			password: 'asdfasdf',
			profile: {name: 'Administrator'}
		});

		Roles.addUsersToRoles(id,'admin');
		console.log('Administrator creado');
	}
});