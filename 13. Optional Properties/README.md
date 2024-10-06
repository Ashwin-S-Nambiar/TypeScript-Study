# Optional Properties
***You can make a certain property optional in an object type by adding a question mark after the property name.***

## Example
```
type Person = {
    name: string,
    age: number,
    email?: string,
    readonly location: string
}
```

***Here the `email` property is an optional property. Also `location` here is `readonly` and cannot be changed after once it's value has been set.***