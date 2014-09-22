angular.module('workshop').controller('VideoCtrl', function ($scope) {
	$scope.test = true;

	$scope.record = undefined;

	$scope.$on('selected', function (ev, record) {
		$scope.record = record;
	});
});
