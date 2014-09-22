describe('List Controller', function () {
	var $scope, ctrl, httpBackend, message;

	beforeEach(module('workshop'));

	beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
		$scope = $rootScope.$new();
		httpBackend = $httpBackend;
		message = jasmine.createSpy('messageService');

		spyOn($scope, '$emit');

		ctrl = $controller('ListCtrl', {
			$scope: $scope,
			message: message
		});
	}));

	it('Should set the test attribute', function () {
		expect($scope.test).toBe(true);
	});

	it('Should set the empty list when initialized', function () {
		expect($scope.elements).toEqual([]);
	});

	it('Should make a request to get the list of videos', function () {
		httpBackend.when('GET', 'data.json').respond([]);
		httpBackend.expectGET('data.json');
		httpBackend.flush();
	});

	it('Should set the list of element when request is finished', function () {
		var response = [
			{},
			{},
			{}
		];
		httpBackend.when('GET', 'data.json').respond(response);
		httpBackend.flush();

		expect($scope.elements).toEqual(response);
	});

	it('Should display a message if request fails', function () {
		httpBackend.when('GET', 'data.json').respond(500, '');
		httpBackend.flush();
		expect(message).toHaveBeenCalledWith('Server error');
	});

	it('Should emit an event when user clicks the active list element', function () {
		var record = {
			title: '',
			active: true
		};
		$scope.onClick(record);

		expect($scope.$emit).toHaveBeenCalledWith('selected', record);
	});

	it('Should NOT emit event when user clicks NOT active list element', function () {
		var record = {
			title: '',
			active: false
		};
		$scope.onClick(record);

		expect($scope.$emit).not.toHaveBeenCalled();
	});
});
