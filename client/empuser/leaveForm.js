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
    },

    lentitles: function() {
      userID = Meteor.userId();
      console.log("LE: "+ LEntitles.find({}, {empid: userID}).count());
      return LEntitles.find({}, {empid: userID});
    }
  });


 