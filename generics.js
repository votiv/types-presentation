function identityN(arg) {
    return arg;
}
function identityA(arg) {
    return arg;
}
function identityT(arg) {
    return arg;
}
var n = 2;
console.log(identityN(n), typeof identityN(n));
console.log(identityA(n), typeof identityA(n));
console.log(identityT(n), typeof identityT(n));
// generic constraints
/*interface ILenght {
  length: number;
}*/
function loggingIdentity(arg) {
    console.log(arg);
    return arg;
}
//
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, 'a'));
console.log(getProperty(x, 'm'));
