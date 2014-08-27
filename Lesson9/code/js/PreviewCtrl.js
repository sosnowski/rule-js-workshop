angular.module('myapp').controller('PreviewCtrl', function ($scope) {
	$scope.$on('data', function (event, records) {
		$scope.count = records.length;
	});
	$scope.$on('select', function (event, el) {
		$scope.$broadcast('show', el);
	});
});
