Template.Contact.events({
	'submit #contactForm': function(event, template){
		event.preventDefault();

		var name = event.target.contactName.value;
		var email = event.target.contactEmail.value;
		var phone = event.target.contactPhone.value;
		var city = event.target.contactCity.value;
		var message = event.target.contactMessage.value;

		var to = 'jmilpel@gmail.com';
		var from = 'raquel@mihealthcoach.com.mx';
		var subject = 'Nuevos datos de cliente';
		var text = "Nombre: " + name + "\n"
    	+ "Email: " + email + "\n"
    	+ "Telefono: " + phone + "\n"
    	+ "Poblacion: " + city + "\n"
    	+ "Mensaje: " + message;

		console.log();
		Meteor.call('sendEmail', to, from, subject, text, function(error){
			if(!error){
				alert('Mensaje enviado');
			}	
		});
	}
});