'use strict';

// Declare app level module which depends on views, and components
	angular.module('myApp', [
	  'ui.router'
	])
	.config(['$stateProvider','$UrlRouterProvider', function($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state('view1',{
				url:'/view1',
				templateUrl:'./view1/view1.html'
			})
			.state('view2',{
				url:'/view2',
				templateUrl:'./view2/view2.html'
			})
			$urlRouterProvider.otherwise("/view1");
}]);
