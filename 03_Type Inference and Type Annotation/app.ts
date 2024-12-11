//Type Inference
// Understanding type inference
// Type annotations

//Type Annotation
let x : number = 12;

//Interfaces and Types Aliases
// - Defining interfaces
// - usage interfaces to define object shapes
// - Extending interfaces
// - Type aliases
// - Intersection types

interface User{ 
    name : string,
    age : number,
    password: string
}

const user : User = {
    name : "John",
    age : 20,
    password : "123456"
}
function getDataOfuser(obj: User){
    console.log(obj);
}

getDataOfuser(user);
getDataOfuser({name: "pikachu", age: 20, password: "123456"});

// Extending interfaces

interface Admin extends User{
    role : string
}

const admin : Admin = {
    name : "John",
    age : 20,
    password : "123456",
    role : "admin"
}

function getDataOfAdmin(obj: Admin){
    console.log(obj);
}

getDataOfAdmin(admin);

interface SuperAdmin extends Admin{
    role : string
}

interface SuperAdmin { // It will merge both Super Admins
    email: string
}

function getDataOfSuperAdmin(obj: SuperAdmin){
    console.log(obj);
}

getDataOfSuperAdmin({name: "pikachu", age: 20, password: "123456", role: "admin", email: "0Bt0j@example.com"});

// Type aliases

type User2 = {
    name : string,
    age : number,
    password: string
}

const user2 : User2 = {
    name : "John",
    age : 20,
    password : "123456"
}

type arg = string | null;
function getValue(obj : arg){
    console.log(obj);
}

getValue("hello");
getValue(null);

//Intersection types
let combo : string & number;

type User1 = {
    name : string,
    age : number,
    password: string
}

type Admin1 = User1 & {
    role : string
}