# Objects
***An object is a structured data type that represents a collection of properties, each with a key and an associated value. The properties of an object can have specific types, and the object itself can be annotated with a type, often defined using an interface or type alias. TS uses structural typing, meaning that the shape of an object (its structure) matters for type compatibility.***

## Example
```ts
const person: {firstName: string, lastName:string, age: number} = {
    firstName: "John",lastName: "Doe",age: 30
};

console.log(person); // Output => { firstName: 'John', lastName: 'Doe', age: 30 }
```
***Here we have `person` as an object which has properties `firstName`, `lastName` and `age`.***