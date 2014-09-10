function Calc() {}

Calc.prototype.add = function (str) {
	return parseInt(str || 0, 10);
}
