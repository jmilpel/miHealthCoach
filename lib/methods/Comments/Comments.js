Meteor.methods ({
	addComment: function (message, postId){
		//obtener el usuario
		var user = Meteor.user();

		if(!user){
			throw new Meteor.Error('Tienes que estar conectado para añadir comentarios');
		}

		if(!message){
			throw new Meteor.Error('El campo mensaje no puede estar vacío');
		}

		if(!postId){
			throw new Meteor.Error('Post no identificado');
		}

		Comments.insert({
			Author: user.profile.name,
			Message: message,
			UserId: user._id,
			PostId: postId,
			CreatedAt: Date.now()
		});
	},

	deleteComment: function(commentID){
	if (!commentID){
		throw new Meteor.Error('Comment Id no puede estar vacio');
		}
		
		Comments.remove(commentID);

	}

});

