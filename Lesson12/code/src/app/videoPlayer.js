angular.module('workshop').directive(function () {
	return {
		restrict: 'E',
		scope: {},
		controller: 'VideoPlayerCtrl',
		templateUrl: 'player.html'
	};
});
