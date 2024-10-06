# Default Parameters value
***Default Parameter can be set for a function by specifying a value to the parameter in the function declaration.***

## Example
```
const triple = (num : number = 6) => num * num * num;
console.log(triple());  // Output => 216
```
***We can see that if we don't provide a value for
`triple` function then it will take its default value.***
