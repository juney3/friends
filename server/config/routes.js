// confirm that routes.js loaded
console.log('routes');

var friends = require('../controllers/friends.js');

// set routes
module.exports = function(app){
	app.get('/friends', friends.index);
	app.get('/friends/:id', friends.show);
	app.post('/friends', friends.create);
	app.put('/friends/:id', friends.update);
	app.delete('/friends/:id', friends.destroy);
	// app.get('/url', function(req, res) {
	// 	console.log('reached /url route');
	// 	friends.method(req, res);
	// })
};
