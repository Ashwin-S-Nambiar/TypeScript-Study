/*  An intersection type is a way to combine multiple types into a single
    type that includes all the properties and methods of each constituent type.*/

type Person = {
    name: string,
    age: number
}    

type Employee = {
    id: number,
    title: string
}

type PersonAndEmployee = Person & Employee

const office: PersonAndEmployee = {
    name: "John",
    age: 30,
    id: 100,
    title: "Intern"
}

console.log(`Name: ${office.name}`,`Title: ${office.title}`) // Output => Name: John Title: Intern