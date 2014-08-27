angular.module('myapp').controller('RightPanelCtrl', function ($scope) {
	$scope.record = {};

	$scope.$on('show', function(event, el){
		$scope.record = el;
	});
});
