Template.ShowPosts.helpers({
	numPosts: function () {
		return Meteor.call('numPost');
	},
	numUsers: function (){
		return Meteor.users.find().count();
	}
});