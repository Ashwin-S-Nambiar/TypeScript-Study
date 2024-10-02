/*  Arrays are a type of object that can store multiple values of the 
    same data type. Arrays in TS are typed, which means you can specify 
    the type of values it can hold.  */

// INFO: 2 ways arrays can be declared.

// (1) Using the square bracket notation.
// (2) Using the generic array<type> notation to indicate array type.

// (1)
const numbers: number[] = [1,2,3,4];
console.log(numbers);   // Output => [ 1, 2, 3, 4 ]
numbers.push(5);
console.log(numbers);   // Output => [ 1, 2, 3, 4, 5 ]

/* Since we have annotated the type of numbers as number, we are not 
   add an item of any other type to it. */  

// (2)   
const items: Array<string> = ["abc","def","xyz"];
console.log(items)  // Output => [ 'abc', 'def', 'xyz' ]
items.push("hello")
console.log(items)  // Output => [ 'abc', 'def', 'xyz', 'hello' ]