Template.ShowPosts.helpers({
	numPost: function () {
		return Meteor.call('numPost');
	}
});