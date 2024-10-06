# Literal Types
***Literal types allow you to specify a values that can only be one specific literal value. This means that a variable with a literal type can only have one specific value.***

## Example
```ts
let color: "red" | "blue" | "green"
color = "red"
// - color = "yellow" is invalid as it's not among the values we set.

let isTrue: true
isTrue = true
// - isTrue = false is invalid since we had specified value as true only.
```

***Here we set the values of variables `color` and `isTrue`, so if we try to set a value not in the literal types then it would cause an error.***