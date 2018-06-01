Template.AdminPanel.helpers({
	'numPosts': function () {
		/*return Meteor.call('numPost');*/
		return Posts.find().count();
	},
	'numUsers': function (){
		return Meteor.users.find().count();
	}
});