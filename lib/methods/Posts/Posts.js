Meteor.methods ({
	addPost: function (title, message){
		//comprobar si el usuario está loggeado
		var id = Posts.insert({
			Title: title,
			Message: message
		});
		return id;
	},

	editPost: function (postID, title, message){
		Posts.update(postID,{
			$set: {
				Title: title,
				Message: message
			}
		});
	},

	deletePost: function(postID){
		Posts.remove(postID);
	}
});