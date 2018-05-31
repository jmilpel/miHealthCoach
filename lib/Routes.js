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
//Show posts page
Router.route('/showposts', function () {
  this.render('ShowPosts');
});


//Login/Register form
Router.route('/loginForm', function () {
	if (!Meteor.userId()){
		//No user login
		this.render('LoginForm');
	}
	else{
		//User login
		Router.go('/');
	}
});

//Users control panel
Router.route('/ucp', function () {
	if (Meteor.userId()){
		//User login
		this.render('UserControl');
	}
	else{
		//No user login
		Router.go('/');
	}
});


//Show a single post
Router.route('/post/:_id', function(){
	this.render('SinglePost', {
    	data: function () { return Posts.findOne({_id: this.params._id}); }
  	});
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

//Admin add Post form
Router.route('/admin/addpost', function () {
 	if (Roles.userIsInRole(Meteor.user(),'admin')){
		//User admin
		this.render('AdminAddPosts');
	}
	else{
		//No user admin
		Router.go('/');
	}
});

//Admin user Password
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