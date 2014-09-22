angular.module('workshop').controller('VideoPlayerCtrl', function ($scope, $element) {
	$scope.test = true;

	$scope.el = $element[0].querySelector('video');

	$scope.play = function () {
		$scope.el.play();
	};

	$scope.pause = function () {
		$scope.el.pause();
	};

	$scope.volumeUp = function () {
		$scope.el.volume += 0.2;
	};

	$scope.volumeDown = function () {
		$scope.el.volume -= 0.2;
	};
});
