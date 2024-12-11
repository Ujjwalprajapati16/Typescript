"use strict";
//Type Inference
// Understanding type inference
// Type annotations
//Type Annotation
let x = 12;
const user = {
    name: "John",
    age: 20,
    password: "123456"
};
function getDataOfuser(obj) {
    console.log(obj);
}
getDataOfuser(user);
getDataOfuser({ name: "pikachu", age: 20, password: "123456" });
const admin = {
    name: "John",
    age: 20,
    password: "123456",
    role: "admin"
};
function getDataOfAdmin(obj) {
    console.log(obj);
}
getDataOfAdmin(admin);
function getDataOfSuperAdmin(obj) {
    console.log(obj);
}
getDataOfSuperAdmin({ name: "pikachu", age: 20, password: "123456", role: "admin", email: "0Bt0j@example.com" });
const user2 = {
    name: "John",
    age: 20,
    password: "123456"
};
function getValue(obj) {
    console.log(obj);
}
getValue("hello");
getValue(null);
//Intersection types
let combo;
