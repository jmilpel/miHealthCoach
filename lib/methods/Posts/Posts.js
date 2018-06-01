Meteor.methods ({
	addPost: function (title, message, postBody){
	//comprobar si el usuario es el administrador
	if (Roles.userIsInRole(Meteor.user(),'admin')){
	//User admin
		var id = Posts.insert({
		Title: title,
		Message: message,
		Body: postBody,
		CreatedAt: Date()
		//CreatedBy: Meteor.user();
	});
		return id;
	}
	else{
		//No usuario admin
		throw new Meteor.Error('Usuario no autorizado');
		}
	},

	editPost: function (postID, title, message, postBody){
		//comprobar si el usuario es el administrador
	if (Roles.userIsInRole(Meteor.user(),'admin')){
		//User admin
		Posts.update(postID,{
			$set: {
				Title: title,
				Message: message,
				Body: postBody
				//UpdateAt: Date.now()
			}
		});
	}
	else{
		//No usuario admin
		throw new Meteor.Error('Usuario no autorizado');
		}
	},

	deletePost: function(postID){
	if (Roles.userIsInRole(Meteor.user(),'admin')){
		//User admin
		Posts.remove(postID);
	}
	else{
		//No usuario admin
		throw new Meteor.Error('Usuario no autorizado');
		}	
	},

	numPost: function () {
        return Post.find().count();
    }
	
});




