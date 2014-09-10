/*
    Exercise 3 - String calculator, part 3
  
    3.1. Add method should be able to sum many numbers. 
       
       e.g. "1,2,3" -> 6
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
    
  });
  
});