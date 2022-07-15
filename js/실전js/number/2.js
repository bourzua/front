const v = Number.parseInt('abc');
console.log(v);
// Not A Number

console.log('v', Number.isNaN(v));
console.log('123', Number.isNaN(123));