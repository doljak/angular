var isGreatThen12 = function (valor) { return valor > 12; };
var thisNumber = 14;
console.log(thisNumber + " \u00E9 maior do que 12?" + (isGreatThen12(thisNumber) ? 'sim' : 'não'));
var call = function (name) { return "Do you copy me " + name + "?"; };
console.log(call('R2'));
var inc = function (speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
};
console.log("in(5,1)=" + inc(5, 1));
console.log("in(5)=" + inc(5));
