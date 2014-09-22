angular.module('workshop').directive('videoPlayer', function () {
	return {
		restrict: 'E',
		scope: {
			record: '='
		},
		controller: 'VideoPlayerCtrl',
		templateUrl: 'player.html'
	};
});
