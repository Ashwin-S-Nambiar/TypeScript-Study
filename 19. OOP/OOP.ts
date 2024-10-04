// ~ Class Properties Annotations
// ~ You can annotate class properties with a type. This allows you to define
// ~ the data type of the property and ensure that its always consistent.

class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const person = new Person("John",20)
console.log(`Name: ${person.name}, Age: ${person.age}`) // Output => Name: John, Age: 20

// ~ Access Modifiers in TS
// ~ In TS you can use access modifiers to control the visibility of class members
// ~ (properties and methods). Access modifiers determine the ways in which class 
// ~ can be accessed from within and outside the class.
// ~ Three types of Access Modifiers are => Public, Private, Protected
// - Public -> can be accessed from anywhere inside and outside the class.
// - Private -> can only be accessed from within the class they are defined in.
// - Protected -> can be accessed within the class defined in and also subclasses that extend the class.


class People {
    public first: string
    public last: string
    protected msg: string

    constructor(first: string, last: string, msg: string) {
        this.first = first
        this.last = last
        this.msg = msg
    }
}

const p1 = new People("John","Doe","Hello")
console.log(p1) // Output => { first: 'John', last: 'Doe', msg: 'Hello' }

// - If we make any of first, last or msg private we won't be able to view them using console.log
// - To view private values we need to make a function to view them inside the class itself.

class h1 extends People {
    public name: string
    public place: string

    constructor(name: string, place: string, first:string, last:string, msg: string) {
        super(first,last,msg)
        this.name = name
        this.place = place
    }

    getDet() : string {
        return `${this.name}, ${this.place}, ${this.first}, ${this.last}, ${this.msg}`
    }
}

const newH = new h1("John","India","What's","Up","Everyone!")
console.log(newH.getDet()) // Output => John, India, What's, Up, Everyone!

// - Getters and setters are used to access and modify class properties.
// - Getters and setters allow you to define a property in a class that
// - looks like a simple variable from outside but internally has additional
// - logic for getting and setting the value. 

class myClass {
    private myProp: number = 0

    get myProperty(): number {
        return this.myProp
    }

    set myProperty(value: number) {
        this.myProp = value
    }
}

const instance = new myClass()
console.log(`Value: ${instance.myProperty}`) // Output => Value: 0
instance.myProperty = 10
console.log(`Value: ${instance.myProperty}`) // Output => Value: 10