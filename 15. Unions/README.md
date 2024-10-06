# Unions
***Unions are used to declare a type that can have one of the several possible types. Unions are useful when we want to allow a variable or parameter to accept multiple values.***

## Example
```ts
type User = {
   first: string,
   last: string,
   age: number
}

type Account = {
   email: string,
   password: string
}

let users: User | Account = {
   first: "Ashwin",
   last: "Hello",
   age: 20
} 

let users2: User | Account = {
   email: "email.com",
   password: "pass"
} 

console.log(users)   // Output => { first: 'Ashwin', last: 'Hello', age: 20 }
console.log(users2)  // Output => { email: 'email.com', password: 'pass' }
```

***Here we have `users` and `users2` variables having different types as they are initialized in different ways even though both have same union of `User | Account`.***