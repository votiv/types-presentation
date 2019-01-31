function identityN(arg: number): number {
  return arg;
}

function identityA(arg: any): any {
  return arg;
}

function identityT<T>(arg: T): T {
  return arg;
}

const n: number = 2;
console.log(identityN(n), typeof identityN(n));
console.log(identityA(n), typeof identityA(n));
console.log(identityT(n), typeof identityT(n));

// generic constraints
/*interface ILenght {
  length: number;
}*/

function loggingIdentity<t>(arg: t): t {
  console.log(arg);
  return arg;
}

//
function getProperty<T, K extends keyof T>(obj: T, key: K): any {
  return obj[key];
}

const x: any = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, 'a'));
console.log(getProperty(x, 'm'));
