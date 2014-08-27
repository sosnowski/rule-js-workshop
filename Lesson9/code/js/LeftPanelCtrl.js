angular.module('myapp').controller('LeftPanelCtrl', function ($scope, storage) {
	$scope.elements = storage.get();

	$scope.show = function(el) {
		$scope.$emit('select', el);
	};

	$scope.$emit('data', $scope.elements);
});
