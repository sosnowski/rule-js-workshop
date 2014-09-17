describe('List Controller', function () {
	var $scope, ctrl;

	beforeEach(module('workshop'));

	beforeEach(inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new();

		ctrl = $controller('ListCtrl', {
			$scope: $scope
		});
	}));

	it('Should set the test attribute', function () {
		expect($scope.test).toBe(true);
	});

	it('Should set the empty list when initialized', function () {

	});

	it('Should make a request to get the list of videos', function () {

	});

	it('Should set the list of element when request is finished', function () {

	});

	it('Should display a message if request fails', function () {

	});

	it('Should emit an event when user clicks the active list element', function () {

	});

	it('Should NOT emit event when user clicks NOT active list element', function () {

	});
});
