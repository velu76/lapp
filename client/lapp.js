if (Meteor.isClient) {

  Template.registerHelper('formatDate', function(date) {
    return moment(date).format('DD-MM-YYYY');
  });

  Template.leaveForm.helpers({
    emp: function () {
      userID = Meteor.userId();
      // console.log("UID:" + userID);
      // console.log("MQ:" + Employees.findOne({},{empid: userID}));
      return Employees.findOne({},{empid: userID});
    },

    ldetails : function() {
      userID = Meteor.userId();
      return Leaves.find({}, {empid: userID});
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
