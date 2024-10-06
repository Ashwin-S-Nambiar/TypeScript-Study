# Any and Unknown Type 
***TypeScript has a special any type that can be used to represent any type. When a variable is annotated with any type, TS will allow it to have any value and disable all type checking for that variable and its properties. This should be used sparingly as overuse can lead to untyped code. Better alternate to this is unknown.***

## Example
```ts
let color: any = 'crimson';
console.log(color,typeof color); // Output => crimson string

color = 10;
console.log(color,typeof color); // Output => 10 number

color = true;
console.log(color,typeof color); // Output => true boolean
```
***We can see that `color` is able to have values of different types without any errors.***
```ts
let x: unknown = 1;
let res = 0;
if ( typeof x == "number") {
    res = x + 1;
}
else if (typeof x == "string") {
    res = x.length
}
console.log(res) // Output => 2
```
***Here we can see the use of unknown.***