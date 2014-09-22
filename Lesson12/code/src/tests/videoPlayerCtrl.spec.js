describe('Video Player Controller', function () {
	var $scope, ctrl, video;

	beforeEach(module('workshop'));

	beforeEach(inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new();
		video = {
			tagName: 'VIDEO',
			volume: 0.5,
			play: jasmine.createSpy('video.play'),
			pause: jasmine.createSpy('video.pause')
		};

		ctrl = $controller('VideoPlayerCtrl', {
			$scope: $scope,
			$element: [
				{
					querySelector: function () {
						return video;
					}
				}
			]
		});
	}));

	it('Should set the test attribute', function () {
		expect($scope.test).toBe(true);
	});

	it('Should assign raw video element to the "el" scope attribute', function () {
		expect($scope.el).toBeDefined();
		expect($scope.el.tagName).toBe('VIDEO');
	});

	it('Should call the play method on the video element', function () {
		$scope.play();
		expect($scope.el.play).toHaveBeenCalled();
	});

	it('Should call the pause method on the video element', function () {
		$scope.pause();
		expect($scope.el.pause).toHaveBeenCalled();
	});

	it('Should increase the video volume', function () {
		$scope.volumeUp();
		expect($scope.el.volume).toBe(0.7);
	});

	it('Should decrease the video volume', function () {
		$scope.volumeDown();
		expect($scope.el.volume).toBe(0.3);
	});
});
