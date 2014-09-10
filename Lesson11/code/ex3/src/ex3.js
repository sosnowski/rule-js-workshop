function Calc() {}

Calc.prototype.add = function (str) {
    str = str || '';
	var sep = str.indexOf(',');
    if (sep === -1) {
        return parseInt(str || 0, 10);
    } else {    
        var a = parseInt(str.slice(0,sep) || 0, 10);
        var b = parseInt(str.slice(sep+1) || 0, 10);
        return a + b;
    }
}
