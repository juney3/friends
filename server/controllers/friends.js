console.log('friends server controller');

// require mongoose
var mongoose = require('mongoose');

// set friend schema from model
var Friend = mongoose.model('Friend');

// define functionFriendsController
function FriendsController() {
	this.index = function(req, res) {
		console.log('this is the friends controller on the server side');
		Friend.find({}, function(err, friends){
			if(err){
				console.log('cannot find friends', err);
			}
			else{
				console.log('found friends', friends);
			}
			res.json(friends);
		})
	};

	this.create = function(req, res) {
		console.log('server side controller create shas', req.body);

		var friend = new Friend({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			birthday: req.body.birthday
		});
		friend.save(function(err){
			if (err){
				console.log('could not save friend');
			}
			else{
				console.log('successfully saved friend');
				Friend.find({}, function(err, friends){
					if(err){
						console.log('cannot find friends', err);
					}
					else{
						console.log('found friends', friends);
					}
					console.log(friends);
					res.json(friends);
				});
			};
		});

		
	};

	this.update = function(req, res) {
		console.log('server side controller update show req params', req.params.id);
		console.log('server side controller update show req body', req.body);
		var updatedData = req.body;

		Friend.update({_id: req.params.id}, updatedData, function(err, updatedData){
			if (err) {
				console.log('update failed', err);
			}
			else{
				console.log('update success');
				res.json(updatedData);
			}
		});
		
	};

	this.destroy = function(req, res) {
		console.log('server side controller deleting', req.params.id);

		// delete your "friend"
		Friend.findOne({_id: req.params.id}, function(err, user) {
			if (err) {
				console.log('delete failed', err);
			}
			else {
				Friend.remove(user, function(err){
					if (err) {
						console.log(err);
					}
					else{
						console.log('successfully deleted friend from DB');

						Friend.find({}, function(err, friends){
							if(err){
								console.log('cannot find friends', err);
							}
							else{
								console.log('found friends', friends);
							}
							console.log(friends);
							res.json(friends);
						});
					}
				})
			}
		})
	};


	this.show = function(req, res) {
		console.log('server side controller show req params', req.params.id);
		Friend.findOne({_id: req.params.id}, function(err, friend){
			if (err){
				console.log('no friend found', err);
			}
			else {
				console.log('found one friend');
				console.log(friend);
				res.json(friend);
			}
		});

	};
}

// export FriendsController results as an object
module.exports = new FriendsController();