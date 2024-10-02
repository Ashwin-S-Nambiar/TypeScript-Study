/* Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value.
   In other words, if you declare a variable without specifying its type, TS will try to infer the type based on its value assigned.
*/

let tech = 'Typescript';
let number = 10;
let bool = true;

console.log(tech,number,bool);   // Output => TypeScript 10 true
console.log(typeof tech,typeof number,typeof bool);    // Output => string number boolean