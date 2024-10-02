/*  Function parameter annotations in TS are used to specify the expected types of the parameters that a function takes. 
*/

// Regular Function Annotation
function addOne(num: number) {
    return num + 1;
}

const result = addOne(4);
console.log(result);    // Output => 5

// Arrow Function Annotation
const square = (num: number) => num * num;

const res = square(10);
console.log(res);    //  Output => 100