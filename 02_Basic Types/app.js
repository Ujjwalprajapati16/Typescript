"use strict";
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
let ab = 12;
let str = "hello";
let bool = true;
//array
let arr = [1, 2, 3, 5, 6];
//tuples
let tup = [12, "hello"];
//enummeration
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let c = Color.Red;
//any
let randomValue = 10;
randomValue = "hello";
randomValue = true;
//unknown
let myVariable = 10;
myVariable = "hello";
myVariable = true;
//void
function printMessage(msg) {
    console.log(msg);
}
//null
let n = null;
//undefined
let u = undefined;
//never
function error(message) {
    throw new Error(message);
}
