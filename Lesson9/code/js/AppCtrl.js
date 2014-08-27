angular.module('myapp', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/preview', {
				templateUrl: 'view/preview.html',
				controller: 'PreviewCtrl'
			})
			.when('/new', {
				templateUrl: 'view/new.html',
				controller: 'NewCtrl'
			})
			.otherwise({
				redirectTo: '/new'
			});

	})
	.controller('AppCtrl', function () {
	});