app.controller("LoginController",function($scope, $http, $state){
	//variables
		$scope.signUp={
			username: undefined,
			password: undefined
		}
		$scope.loginInfo ={
			username: undefined,
			password: undefined
		}

	//function
		$scope.signUserUp = function(){
			
			var data ={				
				username: $scope.signUpInfo.username,
				password: $scope.signUpInfo.password,
			}
			$http.post("http://local.local/ionicsight/api/endpoints/signup.php",data).success(function(response){
				console.log("response");
				//localStorage.setItem("User",JSON.stringify({user:response}));
				
			}).error(function(error){
				console.log(error);
			});
		}
		
		$scope.loginUser = function(){
			var data ={				
				username: $scope.loginInfo.username,
				password: $scope.loginInfo.password,
			}
			$http.post("http://local.local/ionicsight/api/endpoints/login.php",data).success(function(response){					
					localStorage.setItem("user",JSON.stringify({user:response[0].email}));										
					$state.go("application");
					//$scope.loggedIn = false;
				
			}).error(function(error){
				console.log(error);
			});			
			
		}
	
	//init
	
})