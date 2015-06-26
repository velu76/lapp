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


// Calculates the balances of leaves.
// e = entitled
// u = used
// therefore balance = e-u
  Template.registerHelper('dBalance', function(e,u){
    var balance = 0;
    balance = e - u;
    return balance;
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
    },

    lentitles: function() {
      userID = Meteor.userId();
      console.log("LE: "+ LEntitles.find({}, {empid: userID}).count());
      return LEntitles.find({}, {empid: userID});
    }
  });
}





if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
