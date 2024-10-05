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

// - Interface inheritance
interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}
interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}
class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`)
        return true
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email}`)
        return true
    }    
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`)
        return true
    }
}

// ~ Declaration Merging -> refers to the ability to extend or argument an 
// ~ an existing declaration , including interfaces. Useful in case when you
// ~ want to add new properties without needing to modify original declaration.
interface car {
    brand: string
    start(): void
}

// - Declaration Merging
interface car {
    model: string
    stop(): void
}

const newCar : car = {
    brand: "Nissan",
    model: "GTR",
    start() {
        console.log(`Hello`)
    },
    stop() {
        console.log(`Bye`)
    }
}

newCar.start() // Output => Hello
newCar.stop() // Output => Bye