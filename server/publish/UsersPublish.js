Meteor.publish("allusers",  function () {
    return Meteor.users.find({_id: this.userId, admin: true},
      {fields: {createdAt: 1}});
  }
);