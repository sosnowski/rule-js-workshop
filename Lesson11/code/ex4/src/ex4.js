function Calc() {}

Calc.prototype.add = function (str) {
	return (str || '').split(',')
        .map(function (token) {
            return parseInt(token || 0, 10);
        }).reduce(function (acc, n) {
            return acc + n;
        }, 0);
}
