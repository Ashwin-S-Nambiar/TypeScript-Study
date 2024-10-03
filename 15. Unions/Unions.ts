/* Unions are used to declare a type that can have one of the several possible
   types. unions are useful when we want to allow a variable or parameter to
   accept multiple values. */

let myVar: number | string   

function foo(param: string | string[]) {
   // ~ Function body
}

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

const items: (number | string)[] = [1,2.3,"Hello"]
console.log(items)   // Output => [ 1, 2.3, 'Hello' ]