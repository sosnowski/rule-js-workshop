describe('CarFactory', function() {
    var carFactory;

    beforeEach(function() {
        carFactory = CarFactory();
    });

    it('should be able to produce cars', function() {
        expect(carFactory.make).toBeDefined();
        carFactory.make('red');
        expect(carFactory.assemblyLine.length).toEqual(1);
    });

});
