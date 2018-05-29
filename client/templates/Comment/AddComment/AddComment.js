Template.AddComment.events({
	'submit #addCommentForm': function(event, template){
		event.preventDefault();

		var message = event.target.addComment.value;
		//Obtener el postId
		var postId = template.data._id;

		Meteor.call('addComment', message, postId, function(error) {
			if(!error){
				alert('Comentario enviado');
			} else {
				alert('Error al enviar el comentario');
			}
		});
	}
});