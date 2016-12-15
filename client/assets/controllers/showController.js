friendApp.controller('showController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {

	$scope.friend = {};
	
	console.log('show controller friend ID is', $routeParams.id);

	friendsFactory.show($routeParams.id, function(returned_data){
		console.log('back to showcontroller');
		console.log('show controller returned data is', returned_data)
		$scope.friend = returned_data;
	})

}])
