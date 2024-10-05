// ~ In TS, generics allow you to create reusable components that can work 
// ~ with a variety of types. Generics make it possible for you to define 
// ~ functions, classes and interfaces that can work with different data types
// ~ without having to duplicate code.

function printInfo<T>(x: T): T {
    return x;
}

const str = printInfo<string>("Hello")
const num = printInfo<number>(4)
const bool = printInfo<boolean>(true)

console.log(str, num, bool) // Output => Hello 4 true