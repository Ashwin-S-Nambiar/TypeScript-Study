/* You can make a certain property optional in an object type by adding a
    question mark after the property name.*/

type Person = {
    name: string,
    age: number,
    email?: string,
    readonly location: string
}

const newPerson : Person = {name: "Ash", age: 20, location: "India"}
const emp : Person = {name: "Abc", age: 28, email: "a@email.com", location: "India"}

console.log(newPerson) //Output => { name: 'Ash', age: 20, location: 'India' }
console.log(emp) //Output => { name: 'Abc', age: 28, email: 'a@email.com', location: 'India' }

//Info: Readonly properties -> properties that are readonly can't be changed.
