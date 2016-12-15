friendApp.controller('indexController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
	$scope.friends = [];

	var index = function() {
		friendsFactory.index(function(returnedData){
			console.log('returned data', returnedData)
			$scope.friends = returnedData;
			console.log('Index controller', $scope.friends);
		});
	};

	index()

}])