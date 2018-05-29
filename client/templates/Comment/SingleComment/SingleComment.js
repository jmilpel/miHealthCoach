Template.SingleComment.helpers({
	commentDeleteRight: function(){
		if(Meteor.userId() == this.UserId){
			return true;
		} else {
			return false;
		}
	}
});

Template.SingleComment.events({
	'click #deleteComment': function(){
		Meteor.call('deleteComment',this._id, function(error) {
			if(!error){
				alert('Comentario eliminado');
			} else {
				alert('No tienes permisos para eliminar el comentario');
			}
		});
	}

});