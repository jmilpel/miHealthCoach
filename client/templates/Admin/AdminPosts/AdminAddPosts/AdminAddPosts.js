Template.AdminAddPosts.events({
	'submit #addPost': function () {
		event.preventDefault();

		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;
		var postBody = $('#summernote').summernote('code');

		console.log();
		Meteor.call('addPost', title, message, postBody, function(error){
			if(!error){
				Router.go('/showposts');	
			}	
		});
	}
});

Template.AdminAddPosts.onRendered(function(){
	$(document).ready(function() {
  		$('#summernote').summernote();
	});
});