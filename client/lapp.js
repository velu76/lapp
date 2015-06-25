if (Meteor.isClient) {

  Template.registerHelper('formatDate', function(date) {
    return moment(date).format('DD-MM-YYYY');
  });


  Template.registerHelper('displayLType', function(lt) {
    var lType = "NIL"
    switch(lt) {
      case 'AL':
        lType = 'Annual Leave';
        break;

      case 'ML':
          lType = 'Medical Leave';
          break;

      case 'CCL':
        lType = 'Child Care Leave';
        break;

      case 'OIL':
        lType = 'Off In Leau';
        break;

      case 'NPL':
        lType = 'No Pay Leave';
        break;

      case 'MAL':
        lType = 'Maternity Leave';
        break;

      case 'O':
        lType = 'Others';
        break;
    }

    return lType;
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
