angular.module('myapp').controller('NewCtrl', function ($scope, storage) {
	$scope.add = function(){
		storage.add({
			id: storage.getId(),
			name: $scope.name,
			active: $scope.active
		});

		$scope.name = '';
		$scope.active = '';
	}
});