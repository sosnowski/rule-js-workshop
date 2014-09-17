describe('Video Controller', function () {
	var $scope, ctrl;

	beforeEach(module('workshop'));

	beforeEach(inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new();

		ctrl = $controller('VideoCtrl', {
			$scope: $scope
		});
	}));

	it('Should set the test attribute', function () {
		expect($scope.test).toBe(true);
	});

	it('Should set the record to undefined when initialized', function () {

	});

	it('Should react on event, should set the record attribute to the event argument', function () {

	});
});
