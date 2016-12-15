friendApp.controller('deleteController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {

	$scope.friend = {};
	
	console.log('delete controller friend ID is', $routeParams.id);

	friendsFactory.show($routeParams.id, function(returned_data){
		console.log('back to delete controller');
		console.log('delete controller returned data is', returned_data)
		$scope.friend = returned_data;
	})

	//delete function
	$scope.delete = function(id, callback) {
		console.log('delete controller sending friend to factory for deletion', $routeParams.id);
		friendsFactory.delete($routeParams.id, function(data) {
			console.log('getting back fewer friends from server', data);
			$location.url('/');
		})

	}

}])
