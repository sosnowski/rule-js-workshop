angular.module('workshop').factory('message', function ($rootScope) {
	return function (content) {
		$rootScope.messageContent = content;
	};
});
