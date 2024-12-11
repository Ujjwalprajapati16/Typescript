// Functions
// Function types
// Optional and default parameters
// Rest parameters
// Overloads

function login(name: string, age: number, password: (arg: string) => string ) { 
    password("123456");
}

login("John", 20, (password) => password);

// optional and default parameters

function login2(name: string, age: number, password: string = "123456", email?: string) {
    console.log(name, age, password, email);
}

login2("John", 20);
login2("John", 20, "123456", "0Bt0j@example.com"); 

// rest parameters / spread

function login3(name: string, age: number, ...roles: string[]) {
    console.log(name, age, roles);
}

login3("John", 20, "admin", "user");

// function overloading

function login4(name: string, age: number) : void

function login4(name: string, age: number, password: string) : void

function login4(name: any, age: any, password?: any) {
    if(typeof password === "string") {
        console.log(name, age, password);
    } else {
        console.log(name, age);
    }
}