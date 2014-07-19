(function (global) {
	var EE;
	
	if (!global.rule) {
		global.rule = {};
	}
	
	EE = function () {
		//store the listeners somewhere
		this.listeners = {};
	};
	
	EE.prototype.on = function (eventName, listener, context) {
		
		return function () {
			
		}
	};
	
	EE.prototype.emit = function (eventName, data) {
		
		
	};
	
//	var ee = new EE();
//	
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2); //1, 2
//		console.log(this.key); //value
//	}, { key: 'value' });
//	
//	ee.emit('test', [1, 2]);
//	
//	removeListener(); //removes my listener from the event emitter;
//	
//	ee.emit('test'); //nothing will execute
	
	global.rule.EventEmitter = EE;
	
}(window));