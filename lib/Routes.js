//Router.route('/', function () {
//  this.render('Home', {
//    data: function () { return Items.findOne({_id: this.params._id}); }
//  });
//});

//Iron Router config
Router.configure({
	layoutTemplate: 'AppLayout'
});


//Home page
Router.route('/', function () {
  this.render('Home');
});
//Add Post form
Router.route('/addpost', function () {
  this.render('AddPost');
});
//Show posts page
Router.route('/showposts', function () {
  this.render('ShowPosts');
});
//Show admin panel and admin menus
Router.route('/admin', function () {
	if (Roles.userIsInRole(Meteor.user(),'admin')){
		//User admin
		this.render('AdminPanel');
	}
	else{
		//No user admin
		Router.go('/');
	}
});
Router.route('/admin/posts', function () {
  if (Roles.userIsInRole(Meteor.user(),'admin')){
		//User admin
		this.render('AdminPosts');
	}
	else{
		//No user admin
		Router.go('/');
	}
});
//edit post
Router.route('/admin/posts/:_id', function () {
		if (Roles.userIsInRole(Meteor.user(),'admin')){
		//User admin
		this.render('EditPosts', {
    	data: function () { return Posts.findOne({_id: this.params._id}); }
  });
	}
	else{
		//No user admin
		Router.go('/');
	}
});

Router.route('/admin/users', function () {
	if (Roles.userIsInRole(Meteor.user(),'admin')){
		//User admin
		this.render('AdminUsers');
	}
	else{
		//No user admin
		Router.go('/');
	}
});