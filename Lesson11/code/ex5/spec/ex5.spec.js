/*
    Exercise 5 - String calculator, part 5.
    
    5.1. Admire your green tests.
    5.2. Give yourself a pat on the shoulder - you made it! :)
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
        
        describe('for two comma-separated numbers', function () {
            it('should return their sum', function () {
                expect(calc.add('2,3')).toBe(5);
            });
        });
        
        describe('for many comma-separated numbers', function () {
            it('should return their sum', function () {
                expect(calc.add('2,3,5')).toBe(10);
            });
        });
        
        describe('for a negative number in the string', function () {
            it('should throw an exception', function () {
                expect(function() {
                    calc.add('2,-3,5');
                }).toThrow();
            });
        });
    
  });
  
});