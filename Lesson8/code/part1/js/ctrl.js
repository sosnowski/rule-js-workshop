angular.module('myapp').controller('MyCtrl', ['$scope', function ($scope) {

	$scope.name = "Damian";


	$scope.clear = function () {
		$scope.name = '';
	};
}]);
