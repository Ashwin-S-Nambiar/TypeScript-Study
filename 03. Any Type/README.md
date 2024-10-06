# Any Type
***TypeScript has a special any type that can be used to represent any type. When a variable is annotated with any type, TS will allow it to have any value and disable all type checking for that variable and its properties. This should be used sparingly as overuse can lead to untyped code.***

## Example
```
let color: any = 'crimson';

console.log(color,typeof color); // Output => crimson string

color = 10;

console.log(color,typeof color); // Output => 10 number

color = true;

console.log(color,typeof color); // Output => true boolean
```
***We can see that `color` is able to have values of different types without any errors.***