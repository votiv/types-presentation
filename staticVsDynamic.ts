
// type inference
console.log(Array(3).join('wat' + 1));
// console.log(Array(3).join('wat' - 1));

// ----------

// compile vs runtime
/*const nameToUpperCase = (name: string) => name.toUpperCase();

nameToUpperCase(123123);*/

// ----------

/*const foo = (name: string): string => {
  return name;
};

const bar: (name: string) => string = (name) => {
  return name;
};

console.log(foo('yolo'));
console.log(bar('hashtag'));*/

// ----------

/*const fetch: any = require('node-fetch');

fetch('https://api.github.com/users/votiv')
  .then((res: any) => {
    return res.json();
  })
  .then((response: any) => {
    const { name, id, avatar_url }: any = response;
    console.log(name, id, avatar_url);
  });

export {};*/

// ----------

/*enum foo { 'red', 'green', 'blue' }

console.log(foo);
console.log(foo.red);
console.log(foo[0]);

enum bar { 'red' = 'red', 'green' = 'green', 'blue' = 'blue' }

console.log(bar.red);
console.log(bar[0]);*/

// ----------

/*console.log('typeof undefined\t', typeof undefined);
console.log('typeof null\t\t', typeof null);
console.log('undefined == null\t', undefined == null);
console.log('undefined === null\t', undefined === null);*/
