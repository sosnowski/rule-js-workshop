(function (global) {
	if (!global.rule) {
		global.rule = {};
	}
	
	//Implement function that will work like a new operator;
	rule.createClassInstance = function (ClassFunction) {
		//Create an object with a given prototype (ClassFunction.prototype)
		//We are creating an object. The prototype of the newly created object is set to "ClassFunction.prototype"
		var obj = Object.create(ClassFunction.prototype), result;
		
		//We need to execute constructor function in a proper context. So the "this" value is pointing to our object.
		//We can use apply method. apply method allows us to call function with a custom context.
		//Additionally we are passing an array of arguments to the function
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
		result = ClassFunction.apply(obj, Array.prototype.slice.call(arguments, 1));
		
		//If constructor returns some object, return it. If not, return the initially created object
		if(result !== undefined) {
			return result;
		} else {
			return obj;
		}
	};
}(window));