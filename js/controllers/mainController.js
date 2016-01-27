app.controller("MainController", function($scope, $state,$location){
	$scope.title = 'Dashboard';
  	if(localStorage['user']===undefined){
		$state.go("login");
	}  
	
    $scope.$location = $location;

})