angular.module('myapp', []).controller('AppCtrl', function ($scope) {
	$scope.$on('data', function (event, records) {
		$scope.count = records.length;
	});
});
