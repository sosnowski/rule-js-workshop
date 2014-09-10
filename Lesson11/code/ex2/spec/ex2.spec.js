/*
    Exercise 2 - String calculator, part 2
  
    2.1. For two numbers separated by comma, add() should return their sum (e.g. "2,3" -> 5).
*/

describe('Calc', function () {

    var calc;
    
    beforeEach(function () {
        calc = new Calc();
    });
 
    describe('add()', function() {
  
        it('should exist', function () {
            expect(calc.add).toBeDefined();
        });

        describe('for an empty string', function () {
            it('should return zero', function () {
                expect(calc.add('')).toBe(0);
            });
        });

        describe('for a single number', function () {
            it('should parse the input', function () {
                expect(calc.add('7')).toBe(7);
            });
        });
    
  });
  
});