"use strict";
// Functions
// Function types
// Optional and default parameters
// Rest parameters
// Overloads
function login(name, age, password) {
    password("123456");
}
login("John", 20, (password) => password);
// optional and default parameters
function login2(name, age, password = "123456", email) {
    console.log(name, age, password, email);
}
login2("John", 20);
login2("John", 20, "123456", "0Bt0j@example.com");
// rest parameters / spread
function login3(name, age, ...roles) {
    console.log(name, age, roles);
}
login3("John", 20, "admin", "user");
function login4(name, age, password) {
    if (typeof password === "string") {
        console.log(name, age, password);
    }
    else {
        console.log(name, age);
    }
}
