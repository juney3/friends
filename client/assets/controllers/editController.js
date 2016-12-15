friendApp.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {

	// Get a friend from the factory.

	$scope.editFriend = {};

	console.log('editcontroller has the id', $routeParams.id)
	friendsFactory.show($routeParams.id, function(returned_data){
		console.log('editcontroller retrieved friend data', returned_data);

		// convert date string to date type
		var birth_date = new Date(returned_data.birthday);
		returned_data.birthday = birth_date;
		$scope.editFriend = returned_data;
	} )

	$scope.update = function(id, callback) {
		console.log('update controller friend id', $routeParams.id);
		friendsFactory.update($scope.editFriend, $routeParams.id, function(updated_data){
			console.log('edit controller received updated friend data', updated_data);
			$location.url('/');
		})

		
	};
}])