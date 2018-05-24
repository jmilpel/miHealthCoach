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
  this.render('Home',);
});
//Add Post form
Router.route('/addpost', function () {
  this.render('AddPost',);
});
//Show posts page
Router.route('/showposts', function () {
  this.render('ShowPosts',);
});