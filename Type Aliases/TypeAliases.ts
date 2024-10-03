/*  A type alias is a way to create a new name for an existing type.
    It allows you to define a custom type that refers to another type
    and give it a more meaningful or descriptive name. */

type Person = {
    name: string,
    age: number
}

function printPerson(person : Person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`)
}

const myPerson : Person = { name: "Ashwin", age: 22}

printPerson(myPerson) // Output => Name: Ashwin, Age: 22