app.controller("companyController",function($scope, $http, $state){
	//variables
		var data;
		
		
	// List companies 	
		$scope.companies=[];
		$http.post("http://local.local/ionicsight/api/endpoints/tblcompany.php",data).success(function(response){			
			$scope.companies = response;
		}).error(function(error){
			console.log(error);
		});		
	return true;
		
	//function

				
		
	
	//init
	
})