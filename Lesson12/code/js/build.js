angular.module('workshop', []);
;angular.module('workshop').controller('AppCtrl', function ($scope) {
	$scope.test = true;

	$scope.$on('selected', function (ev, record) {
		if (ev.targetScope !== $scope) {
			$scope.$broadcast('selected', record);
		}
	});
});
;angular.module('workshop').controller('ListCtrl', function ($scope, $http, message) {
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
;angular.module('workshop').factory('message', function ($rootScope) {
	return function (content) {
		$rootScope.messageContent = content;
	};
});
;angular.module('workshop').controller('VideoCtrl', function ($scope) {
	$scope.test = true;

	$scope.record = undefined;

	$scope.$on('selected', function (ev, record) {
		$scope.record = record;
	});
});
;angular.module('workshop').directive('videoPlayer', function () {
	return {
		restrict: 'E',
		scope: {
			record: '='
		},
		controller: 'VideoPlayerCtrl',
		templateUrl: 'player.html'
	};
});
;angular.module('workshop').controller('VideoPlayerCtrl', function ($scope, $element) {
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
