angular.module('workshop', []);
;angular.module('workshop').controller('AppCtrl', function ($scope) {
	$scope.test = true;
});
;angular.module('workshop').controller('ListCtrl', function ($scope) {
	$scope.test = true;
});
;angular.module('workshop').factory('message', function ($rootScope) {
	return function (content) {
		$rootScope.messageContent = content;
	};
});
;angular.module('workshop').controller('VideoCtrl', function ($scope) {
	$scope.test = true;
});
;angular.module('workshop').directive(function () {
	return {
		restrict: 'E',
		scope: {},
		controller: 'VideoPlayerCtrl',
		templateUrl: 'player.html'
	};
});
;angular.module('workshop').controller('VideoPlayerCtrl', function ($scope, $element) {
	$scope.test = true;
});
