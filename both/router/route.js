Router.configure({
	layoutTemplate: 'empuser'
});



Router.route('/', function() {
	this.render('lapp');
});