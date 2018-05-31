Template.NavBar.helpers({
	'username': function() {
		return Meteor.user().profile.name;
	}
});

Template.NavBar.events({
	'click #logout': function () {
		Meteor.logout();
	}
});