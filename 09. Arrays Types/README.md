# Array Types
***Arrays are a type of object that can store multiple values of the same data type. Arrays in TS are typed, which means you can specify the type of values it can hold.***

## Example
```
const numbers: number[] = [1,2,3,4];

console.log(numbers);   // Output => [ 1, 2, 3, 4 ]

const items: Array<string> = ["abc","def","xyz"];

console.log(items);  // Output => [ 'abc', 'def', 'xyz' ]
```
***Arrays can be declared in two ways:***
- ***Using the square bracket notation. Shown in `numbers`.***
- ***Using the generic array `<type>` notation to indicate array type. Shown in `items`.***