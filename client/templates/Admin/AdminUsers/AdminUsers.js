Template.AdminUsers.helpers({
	users: function () {
		return Meteor.users.find();
	}
});

Template.AdminUsers.events({
	'click #deletePost': function () {
		Meteor.call('deleteUser',this._id);
	},
	'click #editPost': function () {
		Router.go('/admin/posts/'+this._id);
	}
});