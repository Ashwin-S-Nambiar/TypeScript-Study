function newFn<T>(item: T, value: T): [T, T] {
    return [item, value]
}

// ~ Usage in case of Interface
interface Dog {
    name: string
    breed: string    
}

const dog1 = newFn<Dog>(
    {name: "Buddy", breed: "Pug"},
    {name: "default", breed: "unknown"}    
)

console.log(dog1)  // Output => [ { name: 'Buddy', breed: 'Pug' }, { name: 'default', breed: 'unknown' } ]

function getRandomKeyValuePair<T>(obj: { [key: string] : T }) :
{
    key: string
    value: T
} {
    const keys = Object . keys(obj)
    const randKey = keys [Math . floor (Math. random() * keys.length) ]
    return { key: randKey, value: obj[randKey] }
}    

const stringObject = { a: "apple", b: "banana", c: "cherry" }
const res = getRandomKeyValuePair<string>(stringObject)
console. log(res) // Output => { key: 'b', value: 'banana' }

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item)=> condition(item))
}

const numbArray = [1,2,3,4,5]
const evenNumbers = filterArray<number>(numbArray, (num) => num % 2 === 0)
console.log(evenNumbers) // Output => [ 2, 4 ]

const stringArr = ["apple","banana","cherry","date"]
const shortArr = filterArray<string>(stringArr, (word) => word.length < 6)
console.log(shortArr) // Output => [ 'apple', 'date' ]

function RevPair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1]
}

const rev = RevPair("hello",20)
console.log(rev) // Output => [ 20, 'hello' ]

// ~ Class in Generics

class Box<T> {
    private content: T

    constructor(initial : T) {
        this.content = initial
    }

    getContent() : T {
        return this.content
    }

    setContent(newContent : T) : void {
        this.content = newContent
    }
}

const box = new Box<string>("Hello, TypeScript")
console.log(box) // Output => Box { content: 'Hello, TypeScript' }
box.setContent("Hello World!") 
console.log(box) // Output => Box { content: 'Hello World!' }
