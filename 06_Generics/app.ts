// Generics
// Generic functions
// Generic interfaces
// Generic Classes

// Generic functions
function logger<T>(a: T){
    console.log(a);
}

logger<String>("Hello");
logger<Number>(12);

// Generic interfaces
interface Logger<T> {
    (a: T): void;
}

let log: Logger<string> = (a) => {
    console.log(a);
}

log("Hello");

// Generic Classes
class Logger<T> {
    log(a: T) {
        console.log(a);
    }
}

let log2 = new Logger<string>();
log2.log("Hello");

let log3 = new Logger<Number>();
log3.log(12);