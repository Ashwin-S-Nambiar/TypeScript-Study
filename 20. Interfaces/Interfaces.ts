// ~ Interface is a way to define a contract for the shape of an object.
// ~ It specifies the properties and their types that an object must have.
// ~ Interfaces are a powerful tool for enforcing a certain structure in your code.

// - Interface Definition
interface Person {
    firstName: string
    lastName: string
    age: number
}

// - Usage
const examplePerson: Person = {
    firstName: "John", 
    lastName: "Doe",
    age: 30
}

// - Interface for a function
interface Operation {
    (x: number, y: number): number
}

const add: Operation = (a,b) => a + b
const sub: Operation = (a,b) => a - b

console.log(add(1,5)) // Output => 6
console.log(sub(10,5)) // Output => 5

// - Interface for a class
interface Vehicle {
    start(): void
    stop(): void
}

//- Class

class Car implements Vehicle {
    start() {
        console.log("Hello!")
    }

    stop() {
        console.log("Bye!")
    }
}

const myCar = new Car()
myCar.start() // Output => Hello!
myCar.stop() // Output => Bye!