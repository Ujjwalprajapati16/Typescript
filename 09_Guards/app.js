"use strict";
// Type Guards and Typescript Utility Types
// Using typeof and instanceof
// Partial, Required, Readonly
// type guard -> type narrowing
function value(arg) {
    if (typeof arg === "number") {
        return arg;
    }
    else {
        return arg.length;
    }
}
value("hello");
value(12);
