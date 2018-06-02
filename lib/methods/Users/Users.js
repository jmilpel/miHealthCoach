Meteor.methods ({
	deleteUser: function(userID){
	if (!userID){
		throw new Meteor.Error('UserId no puede estar vacio');
		}
		Meteor.users.remove(userID, function(error, result) {
    	if (error) {
        	console.log("Error removing user: ", error);
    	} else {	
        	console.log("Number of users removed: " + result);
    		}
		});
	}
});