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
    name = "Laptop";
    price = 10000;
    category = "Electronics";
}

let d1 = new Device();
console.log(d1);

// Constructors
class BottleMaker {
    constructor(public name: string, public price: number) {}
}

let b1 = new BottleMaker("Coke", 10);
console.log(b1);

class HumanMaker {
    age = 0;
    constructor(public name: string) {}
}

let h1 = new HumanMaker("John");
console.log(h1);

class Music {
    constructor(public title: string, public artist: string, public thumbnail: string, public length: number) {}
}
let m1 = new Music("song1", "artist1", "thumbnail1", 100);
console.log(m1);
m1.artist = "Arijit singh";
console.log(m1);

// this keyword
class Data {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }

    changeName(name: string) {
        this.name = name;
    }
}

let d2 = new Data("John", 20);
console.log(d2);
d2.changeName("Pikachu");
console.log(d2);

// Access Modifiers (public, private, protected)
class Data2 {
    public name: string;
    private age: number;
    protected city: string;
    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    changeName(name: string) {
        this.name = name;
    }
}

let d3 = new Data2("John", 20, "Delhi");
console.log(d3);
d3.changeName("Pikachu");
console.log(d3);

class MetalBottleMaker extends BottleMaker {
    constructor(name: string, price: number){
        super(name, price);
    }

    getValue(){
        console.log(this.name);
    }
}

let b2 = new MetalBottleMaker("Coke", 10);
console.log(b2);
b2.getValue();

// Readonly properties
class User {
    constructor(public readonly fname: string) {}

    changeName(fname: string) {
        // this.fname = fname; // its not possible
    }
}

let u1 = new User("John");
console.log(u1);
u1.changeName("Pikachu");
console.log(u1);

//Parameters properties (?)
class Data3 {
    constructor(public readonly fname: string, public readonly lname?: string) {} //lname is optional beacsue of ?
    
}

let d4 = new Data3("John");
console.log(d4);
let d5 = new Data3("John", "Doe");
console.log(d5);

// Getters and Setters
class Data4 {
    private _fname: string;
    constructor(fname: string) {
        this._fname = fname;
    }

    get fname() {
        return this._fname;
    }

    set fname(fname: string) {
        this._fname = fname;
    }
}

let d6 = new Data4("John");
console.log(d6);
d6.fname = "Pikachu";
console.log(d6);

// Static members
class Data5 {
    static count = 0;
    constructor(public fname: string) {
        Data5.count++;
    }
}

let d7 = new Data5("John");

class Shery {
    static version : number = 1.0;
    static getrandom(){
        return Math.random();
    }
}

console.log(Shery.version);
console.log(Shery.getrandom());

// Abstarct classes and methods
abstract class Data6 {
    abstract fname: string;
    abstract lname: string;
}

class Data7 extends Data6 {
    fname = "John";
    lname = "Doe";
}

class Payment {
    constructor(protected amount: number, protected account: number) {}
    isPaymentValid(amount: number) {
        return amount > 0;
    }
}

class Paytm extends Payment {
    constructor(amount: number, account: number) {
        super(amount, account);
    }
}