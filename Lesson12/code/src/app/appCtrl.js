angular.module('workshop').controller('AppCtrl', function ($scope) {
	$scope.test = true;

	$scope.$on('selected', function (ev, record) {
		if (ev.targetScope !== $scope) {
			$scope.$broadcast('selected', record);
		}
	});
});
