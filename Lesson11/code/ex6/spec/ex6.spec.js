/*
    Exercise 6 - Simple template `engine`
    
    Implement a function, which given a name of a template (stored on the server)
    and a model (flat POJO), renders the template
    (returns a string with placeholders replaced by values from the model).
    
    To load the template from the server use:
        rulejs.loadTemplate(name, callback)
    On retrieval callback is invoked with one argument: template (string)
    
    An example of a template with two placeholders, foo and bar:
        "First name: {{foo}}<br>Last name: {{bar}}"
        
    If we assume this template is called user-info, calling:
    
        renderTemplate('user-info', {
            foo: 'John',
            bar: 'Doe'
        }, fn);
        
    will invoke fn with arg: 'First name: John<br>Last name: Doe'
    
    Available templates:
        red, green, blue, brown, black, yellow, orange
    
*/

describe('loadTemplate()', function () {
    it('should be available', function () {
        expect(rulejs.loadTemplate).toBeDefined();
    });
});

describe('renderTemplate()', function () {
    
});
