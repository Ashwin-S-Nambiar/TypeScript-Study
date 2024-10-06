# Never Keyword

***The never keyword is used to indicate that a function will not return anything, or that a variable can never have a value. The never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. Used to catch errors at compile-time.***

## Example
```
function throwError(msg: string): never {
    throw new Error(msg);
}
```
***In this case the function `throwError` has return type `never` since we don't want it to return a value anytime.***