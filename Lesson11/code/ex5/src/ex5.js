function Calc() {}

Calc.prototype.add = function (str) {
	var pieces = (str || '').split(',');
    var nums = pieces.map(function (token) {
		return parseInt(token || 0, 10);
    });
    if (nums.some(function (n) { return n < 0; })) {
		throw new Error('Negatives not allowed');
    }
    var sum = nums.reduce(function(a, b) {
		return a + b;
    }, 0);
    return sum;
}
