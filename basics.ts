const num: number = 1;
const str: string = 'my awesome string';
const bool: boolean = false;

const neverUse: any = { notSpecific: 'anything goes here' };
const alsoNeverUser: object = {};

const myFn: () => void = () => console.log('doesn\'t return anything');
const otherFn: (name: string) => string = name => name.toLocaleLowerCase();
const promiseFn: (param: string) => Promise<string> = param => new Promise(
  resolve => resolve('i\'m a promise')
);
