Template.UserControl.events({
	'submit #changePassword': function(){
		event.preventDefault();

		var oldPw = event.target.oldPassword.value;
		var newPw = event.target.newPassword.value;

		Accounts.changePassword(oldPw, newPw, function(err){
			if(!err){
				alert('¿Contraseña modificada!');
			}

		});
	}
});