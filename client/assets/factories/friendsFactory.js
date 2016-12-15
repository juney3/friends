console.log('Friends Factory');

friendApp.factory('friendsFactory', ['$http', function($http) {
	// constructor for factory
	var friends = [];
	var friend = {};

	function FriendsFactory() {
		var __this = this;
		this.create = function(newfriend, callback) {
			console.log('FriendsFactory creating', newfriend);
			$http.post('/friends', newfriend).then(function(returned_data){
				console.log('FriendsFactory - newFriend returned', returned_data.data);
				if (typeof(callback) == 'function') {
					callback(returned_data.data);
				}
			});
		};

		this.update = function(editfriend, id, callback) {
			console.log('Friends factory updating', editfriend)
			$http.put('/friends/'+id, editfriend).then(function(returned_data){
				console.log(returned_data.data);
				if (typeof(callback) == 'function') {
					callback(returned_data.data);
				}
			});
		};

		this.index = function(callback) {
			$http.get('/friends').then(function(returned_data){
				friends = returned_data.data;
				callback(friends);
				console.log('friendsFactory index retrieving', friends)
			});
		};

		this.delete = function(id, callback){
			console.log('delete in friendsFactory deleting', id)
			$http.delete('/friends/'+id).then(function(returned_data){
				console.log('deleted your friend');
				if (typeof(callback) == 'function') {
					callback(returned_data.data);
				}
			});
		};

		this.show = function(id, callback) {
			console.log('show in Factory showing', id)
			$http.get('/friends/'+id).then(function(returned_data) {
				console.log('friends factory show returned data', returned_data.data);
				if (typeof(callback) == 'function') {
					callback(returned_data.data);
				};
			});
		};

		this.getFriends = function(callback) {
			callback(friends);
		};

		this.getFriend = function(callback) {
			callback(friend);
		};
 	}

 	console.log(new FriendsFactory());
 	return new FriendsFactory();
}]);