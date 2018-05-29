Template.ShowPosts.helpers({
	numPost: function () {
		var num = Posts.find().count();
		return num;
	}
});