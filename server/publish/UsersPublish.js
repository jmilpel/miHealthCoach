Meteor.publish('usersCount', function () {
    return Meteor.users.find();
});