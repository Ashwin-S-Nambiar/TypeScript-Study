/*  The never keyword is used to indicate that a function will not return anything, or that a variable can never have a value
    The never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. 
    Used to catch errors at compile-time. */

function throwError(msg: string): never {
    throw new Error(msg);
}    

function infiniteLoop(): never {
    while(true) {}
}

let x: never;

function neverreturns(): never {
    while (true) {}
}

//x = neverReturns(); Compile-time Error 