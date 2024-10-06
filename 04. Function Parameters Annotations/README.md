# Function Parameters Annotations
***Function parameter annotations in TS are used to specify the expected types of the parameters that a function takes.***

## Example
```ts
function addOne(num: number) {
    return num + 1;
}
```
***The `addOne` function above has parameter `num` annotated with type `number`. If we try to pass any other type to the function as parameter it will result in an error.***
