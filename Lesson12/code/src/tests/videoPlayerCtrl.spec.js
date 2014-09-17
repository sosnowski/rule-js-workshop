describe('Video Player Controller', function () {
	var $scope, ctrl;

	beforeEach(module('workshop'));

	beforeEach(inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new();

		ctrl = $controller('VideoPlayerCtrl', {
			$scope: $scope,
			$element: {}
		});
	}));

	it('Should set the test attribute', function () {
		expect($scope.test).toBe(true);
	});

	it('Should assign raw video element to the "el" scope attribute', function () {

	});

	it('Should call the play method on the video element', function () {

	});

	it('Should call the pause method on the video element', function () {

	});

	it('Should increase the video volume', function () {

	});

	it('Should decrease the video volume', function () {

	});
});
