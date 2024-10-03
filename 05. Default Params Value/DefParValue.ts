// Default Parameter can be set for a function by specifying a value to the parameter in the function declaration.

const triple = (num : number = 6) => num * num * num;

console.log(triple());  // Output => 216 
const val = triple(5); 
console.log(val);   // Output => 125
