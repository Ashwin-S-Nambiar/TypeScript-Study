let x: unknown = 1;
let res = 0;
if ( typeof x == "number") {
    res = x + 1;
}
else if (typeof x == "string") {
    res = x.length
}
console.log(res) // Output => 2
