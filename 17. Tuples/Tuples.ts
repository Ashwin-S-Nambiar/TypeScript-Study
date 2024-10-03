// ~ Tuple is a type that represents an array with a fixed number of elements,
// ~ where each element can have a different type.
// ~ The order of the types in the tuple definition corresponds to the order
// ~ of the values in the actual array.

let myTuple: [string, number] = ["hello",42]
console.log(myTuple[0]) // Output => hello
console.log(myTuple[1]) // Output => 42

// ~ Destructuring Tuple

let [first, second] = myTuple
console.log(first,second) // Output => hello 42