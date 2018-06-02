Template.AdminUsers.helpers({
	users: function () {
		return Meteor.users.find();
	}
});

Template.AdminUsers.events({
	'click #deleteUser': function () {
		Meteor.call('deleteUser',this._id);
	}
});