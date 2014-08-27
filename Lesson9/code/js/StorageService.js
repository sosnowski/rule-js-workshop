angular.module('myapp')
	.factory('storage', function($window){
		var storage = $window.localStorage,
			key = 'records',
			idKey = 'recordsId';

		function addFn(item) {
			var items = getFn();
			items.push(item);
			items = JSON.stringify(items);
			storage.setItem(key, items);
		};

		function getFn() {
			var items = storage.getItem(key);
			items = items ? JSON.parse(items) : [];
			return items;
		};

		function getIdFn() {
			var id = storage.getItem(idKey) || 0;
			++id;
			storage.setItem(idKey, id);
			return id;
		};

		return {
			add: addFn,
			get: getFn,
			getId: getIdFn
		};
	});