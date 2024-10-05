// ~ Type narrowing is the process of refining a variables's type within a 
// ~ conditional block of code. This allows you to write more precise and type-safe code.

// ~ Type narrowing can be achieved by:
// - Type guards
// - The instanceof operator
// - Intersection types


// ~ Type guards are mechanisms that help TypeScript understand and narrow down
// ~ types more precisely. One common type of type guard is typeof operator.

type MyType = string | number

function exampleFunction(value: MyType): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase())
    }
    else {
        console.log(++value)
    }
}

exampleFunction("hello") // Output=> HELLO
exampleFunction(20) // Output=> 21


// ~ The instanceof operator is another type guard in TypeScript that allows
// ~ you to check whether an object is an instance of a particular class or constructor function.

class Dog {
    bark(): void {
        console.log("Woof!")
    }
}

class Cat {
    meow(): void {
        console.log("Meow!")
    }
}

function animalSound(animal: Dog | Cat): void {
    if(animal instanceof Dog) {
        animal.bark()
    }
    else {
        animal.meow()
    }
}

const myDog = new Dog( )
const myCat = new Cat( )

animalSound(myDog) // Output -> Woof!
animalSound(myCat) // Output -> Meow!


// ~ Intersection types in TypeScript allow you to combine multiple types into a
// ~ single type. The resulting type will have all the properties of each individual type. 
// ~ We create intersection types using `&` operator.

type Employee = {
    id: number
    name: string
}

type Manager = {
    dept: string
    role: string
}

type ManagerEmployeeInfo = Employee & Manager

const manager: ManagerEmployeeInfo = {
    id: 123,
    name: "Alex",
    dept: "Engineering",
    role: "Team Leader"
}

console.log(manager) // Output => { id: 123, name: 'Alex', dept: 'Engineering', role: 'Team Leader' }  