angular.module('workshop').controller('ListCtrl', function ($scope, $http, message) {
	$scope.test = true;

	$scope.elements = [];

	$http.get('data.json').success(function (response) {
		$scope.elements = response;
	}).error(function (response) {
		message('Server error');
	});


	$scope.onClick = function (record) {
		if (record.active === true) {
			$scope.$emit('selected', record);
		}
	};
});
