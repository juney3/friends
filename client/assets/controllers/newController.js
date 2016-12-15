friendApp.controller('newController', ['$scope', 'friendsFactory', '$routeParams', '$location',function($scope, friendsFactory, $routeParams, $location) {
	// This index method accesses the friends factory and runs the friends index. Set it as a variable to minimize repetition

var index = function() {
	friendsFactory.index(function(returnedData){
		$scope.friends = returnedData;
	});
};


	// $scope create function
	$scope.createFriend = function() {
		console.log('NewController says', $scope.newFriend);
		friendsFactory.create($scope.newFriend, function(){
			console.log("back to controller");
			$scope.newFriend = {};
			index();
			$location.url('/');
		})
	}
}]);