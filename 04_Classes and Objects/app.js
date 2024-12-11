"use strict";
// Classes and Objects
//  - Class definition
//  - Constructors
//  - Access Modifiers (public, private, protected)
//  - Readonly properties
//  - Optional properties
//  - Parameters properties
//  - Getters and setters
//  - Static members
//  - Abstarct classes and methods
//class definition
class Device {
    constructor() {
        this.name = "Laptop";
        this.price = 10000;
        this.category = "Electronics";
    }
}
let d1 = new Device();
console.log(d1);
// Constructors
class BottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b1 = new BottleMaker("Coke", 10);
console.log(b1);
class HumanMaker {
    constructor(name) {
        this.name = name;
        this.age = 0;
    }
}
let h1 = new HumanMaker("John");
console.log(h1);
class Music {
    constructor(title, artist, thumbnail, length) {
        this.title = title;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
    }
}
let m1 = new Music("song1", "artist1", "thumbnail1", 100);
console.log(m1);
m1.artist = "Arijit singh";
console.log(m1);
// this keyword
class Data {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    changeName(name) {
        this.name = name;
    }
}
let d2 = new Data("John", 20);
console.log(d2);
d2.changeName("Pikachu");
console.log(d2);
// Access Modifiers (public, private, protected)
class Data2 {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    changeName(name) {
        this.name = name;
    }
}
let d3 = new Data2("John", 20, "Delhi");
console.log(d3);
d3.changeName("Pikachu");
console.log(d3);
class MetalBottleMaker extends BottleMaker {
    constructor(name, price) {
        super(name, price);
    }
    getValue() {
        console.log(this.name);
    }
}
let b2 = new MetalBottleMaker("Coke", 10);
console.log(b2);
b2.getValue();
// Readonly properties
class User {
    constructor(fname) {
        this.fname = fname;
    }
    changeName(fname) {
        // this.fname = fname; // its not possible
    }
}
let u1 = new User("John");
console.log(u1);
u1.changeName("Pikachu");
console.log(u1);
//Parameters properties (?)
class Data3 {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    } //lname is optional beacsue of ?
}
let d4 = new Data3("John");
console.log(d4);
let d5 = new Data3("John", "Doe");
console.log(d5);
// Getters and Setters
class Data4 {
    constructor(fname) {
        this._fname = fname;
    }
    get fname() {
        return this._fname;
    }
    set fname(fname) {
        this._fname = fname;
    }
}
let d6 = new Data4("John");
console.log(d6);
d6.fname = "Pikachu";
console.log(d6);
// Static members
class Data5 {
    constructor(fname) {
        this.fname = fname;
        Data5.count++;
    }
}
Data5.count = 0;
let d7 = new Data5("John");
class Shery {
    static getrandom() {
        return Math.random();
    }
}
Shery.version = 1.0;
console.log(Shery.version);
console.log(Shery.getrandom());
// Abstarct classes and methods
class Data6 {
}
class Data7 extends Data6 {
    constructor() {
        super(...arguments);
        this.fname = "John";
        this.lname = "Doe";
    }
}
class Payment {
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    isPaymentValid(amount) {
        return amount > 0;
    }
}
class Paytm extends Payment {
    constructor(amount, account) {
        super(amount, account);
    }
}
