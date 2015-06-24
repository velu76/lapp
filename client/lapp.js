if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.leaveForm.helpers({
    emp: function () {
      userID = Meteor.userId();
      // console.log("UID:" + userID);
      // console.log("MQ:" + Employees.findOne({},{empid: userID}));
      return Employees.findOne({},{empid: userID});
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
