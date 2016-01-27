app.controller("TopNavController",function($scope, $location){
	//variables

			
	//function
		$scope.isActive = function(destination){		
			return destination==$location.path();
		}
		


	//init
	
})