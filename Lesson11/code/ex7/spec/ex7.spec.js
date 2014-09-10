/*
    Exercise 7 - Simple template `engine`
    
    ...and that concludes our workshop :)
    
    Congratulations, 
    
    You're now unofficially a javascript testing ninja!
    
    :)
    
*/

describe('loadTemplate()', function () {
    it('should be available', function () {
        expect(rulejs.loadTemplate).toBeDefined();
    });
});

describe('renderTemplate()', function () {

    it('should be available', function () {
        expect(renderTemplate).toBeDefined();
    });
  
    it('loads specified template', function () {
        spyOn(rulejs, 'loadTemplate');
        renderTemplate('brown', {}, function () {});
        expect(rulejs.loadTemplate).toHaveBeenCalledWith('brown', jasmine.any(Function));
    });

    it('returns rendered template', function () {
        spyOn(rulejs, 'loadTemplate').and.callFake(function (name, callback) {
            callback('First name: {{foo}}<br>Last name: {{bar}}');
        });
        var result;
        renderTemplate('user-info', {
            foo: 'John',
            bar: 'Doe'
        }, function (template) {
            result = template;
        });
        expect(result).toBe('First name: John<br>Last name: Doe');
    });
    
});
