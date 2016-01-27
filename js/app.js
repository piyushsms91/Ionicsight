'use strict'

var app = angular.module('app', ['ui.router','ui.router.state', 'ncy-angular-breadcrumb']);
	app.config(function($breadcrumbProvider) {
		$breadcrumbProvider.setOptions({
			prefixStateName: 'dashboard',
			template: 'bootstrap2'
		});
	})
 	app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				controller:'MainController',
				templateUrl:'templates/application.html',	
				ncyBreadcrumb: {
				  label: 'Dashboard'
				}
			})		
			.state('dashboard.companyName', {
				url: '/:companyName',
				controller:'CompanyController',
				templateUrl: 'templates/company.html',	
				ncyBreadcrumb: {
					label: 'test',
					
				}
			})
 			.state('home',{
				url:'/',
				templateUrl:'templates/home.html'
			}) 
			.state('About',{
				url:'/about',
				templateUrl:'templates/about.html'
			})
			.state('Library',{
				url:'/library',
				templateUrl:'templates/library.html'
			})
			.state('Help',{
				url:'/help',
				templateUrl:'templates/help.html'
			})			
			.state('Contact Us',{
				url:'/contact-us',
				templateUrl:'templates/contact-us.html'
			})	
			.state('Login',{
				url:'/login',
				controller:'LoginController',
				templateUrl:'templates/login.html'
			})	
		
		$urlRouterProvider.otherwise('/');		
		
	}]);