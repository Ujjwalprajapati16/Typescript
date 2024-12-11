// Basic Types
// - Primitive Types (number, string, boolean)
// - Arrays
// - Tuples
// - Enums
// - Any, Unknown, Void, Null, Undefined, Never

// primitive and reference
// reference - () {} []

// var , let , const

// primitive
let ab : number = 12;
let str : string = "hello";
let bool : boolean = true;

//array
let arr = [1, 2, 3, 5, 6];

//tuples
let tup : [number, string] = [12, "hello"];

//enummeration
enum Color {
    Red = 1,
    Green = 2,
    Blue = 3,
}
let c : Color = Color.Red;

//any
let randomValue : any = 10;
randomValue = "hello";
randomValue = true;

//unknown
let myVariable : unknown = 10;
myVariable = "hello";
myVariable = true;

//void
function printMessage(msg : string) : void {
    console.log(msg);
}

//null
let n : null = null;

//undefined
let u : undefined = undefined;

//never
function error(message : string) : never {
    throw new Error(message);
}