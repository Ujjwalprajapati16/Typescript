"use strict";
// Generics
// Generic functions
// Generic interfaces
// Generic Classes
// Generic functions
function logger(a) {
    console.log(a);
}
logger("Hello");
logger(12);
let log = (a) => {
    console.log(a);
};
log("Hello");
// Generic Classes
class Logger {
    log(a) {
        console.log(a);
    }
}
let log2 = new Logger();
log2.log("Hello");
let log3 = new Logger();
log3.log(12);
