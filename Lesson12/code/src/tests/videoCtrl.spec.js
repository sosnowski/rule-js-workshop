describe('Video Controller', function () {
	var $scope, ctrl, rootScope;

	beforeEach(module('workshop'));

	beforeEach(inject(function ($rootScope, $controller) {
		rootScope = $rootScope;

		$scope = $rootScope.$new();

		ctrl = $controller('VideoCtrl', {
			$scope: $scope
		});
	}));

	it('Should set the test attribute', function () {
		expect($scope.test).toBe(true);
	});

	it('Should set the record to undefined when initialized', function () {
		expect($scope.record).toBe(undefined);
	});

	it('Should react on event, should set the record attribute to the event argument', function () {
		var record = {};
		rootScope.$broadcast('selected', record);

		expect($scope.record).toBe(record);
	});
});
