# Typescript

---

### **Overview**

- **Developed by Microsoft**.
- Supported by frameworks like Angular, Vue.js 3, and React.js.
- Compiles to ES5 and supports modern JavaScript features with additional tools like decorators, generics, interfaces, enums, and modules.

---

### **Types in TypeScript**

1. **String**
    
    ```tsx
    
    const myName: string = 'Robert';
    
    ```
    
    Use single (**`'`**) or double (**`"`**) quotes.
    
2. **Number**
    
    ```tsx
    
    const myAge: number = 24;
    
    ```
    
    Supports decimal, hexadecimal, binary, and octal literals.
    
3. **Boolean**
    
    ```tsx
    
    const hasHobbies: boolean = true;
    
    ```
    
4. **Array**
    - Explicit type:
        
        ```tsx
        
        const hobbies: string[] = ['Programming', 'Cooking'];
        
        ```
        
    - Type inference:
        
        ```tsx
        
        const numbers = [1, 3.22, 6, -1]; // number[]
        
        ```
        
5. **Tuple**
    
    Fixed types and order:
    
    ```tsx
    
    const address: [string, number] = ["Street", 99];
    
    ```
    
6. **Any**
    
    For unknown or dynamic types:
    
    ```tsx
    
    let myCar: any = 'BMW';
    myCar = { brand: 'BMW', series: 3 };
    
    ```
    
7. **Enums**
    
    Assign friendly names to numeric values:
    
    ```tsx
    
    enum Color {
        Gray,       // 0
        Red,        // 1
        Green = 100,// 100
        Blue,       // 101
        Yellow = 2  // 2
    }
    const myColor: Color = Color.Green; // 100
    
    ```
    

---

## Functions

In TypeScript, functions can have:

1. **Argument Types**: Specify types for function parameters.
2. **Function Return Types**: Define the type of the return value.

### Example

```tsx
function returnMyName(myName: string): string {
    return myName;
}
console.log(returnMyName('Robert')); // Prints: Robert

```

### Argument Types

Parameters of functions can be typed:

```tsx
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
// console.log(multiply('Robert', 5)); // Error: Arguments must be numbers
console.log(multiply(10, 5)); // Prints: 50

```

### Function Types

Functions themselves can have types.

```tsx
const myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; // Error
// myMultiply(); // Error
myMultiply = multiply;
console.log(myMultiply(5, 2)); // Prints: 10

```

### Void Function Type

A `void` type indicates a function does not return a value.

```tsx
function sayHello(): void {
    console.log('Hello!');
}

let unusable: void = undefined; // Can only be assigned `undefined` or `null`

```

---

## Objects

### Object Types

Objects in TypeScript can have defined key-value pairs with specific types:

```tsx
let userData: { name: string, age: number } = {
    name: 'Robert',
    age: 24
};
// userData = { name: 2, age: 'Age' }; // Error

```

### Complex Objects

Objects with more complex structures:

```tsx
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3, 99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};

```

### Optional Properties

Use `?` to make object properties optional.

```tsx
const user: { name: string, age?: number } = { name: 'Robert' };
const user2: { name: string, age?: number } = { name: 'Robert', age: 24 };
// const invalidUser: { name: string, age?: number } = { age: 24 }; // Error

```

---

## Aliases

Create custom types using the `type` keyword.

```tsx
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3, 99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};

```

---

## Union Types

Variables can accept multiple types using `|`.

```tsx
let myRealAge: number | string = 24;
myRealAge = '24';
// myRealAge = true; // Error

```

---

## Intersection Types

Intersection types combine multiple types into one. The types must be compatible (e.g., no conflicting properties).

```tsx
interface Loggable {
    log(name: string, age: number): void;
}

interface Person {
    name: string;
    age: number;
    isStark?: boolean;
}

type LoggablePerson = Loggable & Person;

const logPerson = (name: string, age: number): void => {
    console.log(`I am ${name}, and I am ${age} years old.`);
};

const jonSnow: LoggablePerson = {
    name: "Jon Snow",
    age: 23,
    log: logPerson
};

console.log(jonSnow.name); // "Jon Snow"
console.log(jonSnow.age); // 23
console.log(jonSnow.isStark); // undefined
jonSnow.log(jonSnow.name, jonSnow.age); // "I am Jon Snow, and I am 23 years old."

```

---

### **Type Checking**

- Use **`typeof`** for runtime type checks, similar to JavaScript:
    
    ```tsx
    
    let value = 'A string';
    if (typeof value === 'string') {
      console.log('value is a string');
    }
    
    ```
    

### **Never**

- Represents values that never occur (e.g., functions that always throw errors or never return):
    
    ```tsx
    
    function neverReturns(): never {
      throw new Error('An error!');
    }
    
    ```
    

### **Nullable**

- **`null`** and **`undefined`** are their own types but can be used with unions:
    
    ```tsx
    
    let value: null | number = 12;
    value = null;
    
    ```
    

### **Type Assertions**

- Tells the compiler you know more about the type:
    - **Angle-bracket syntax**:
        
        ```tsx
        
        const value: any = "string";
        const length: number = (<string>value).length;
        
        ```
        
    - **`as` syntax** (preferred for JSX):
        
        ```tsx
        typescript
        Copy code
        const length: number = (value as string).length;
        
        ```
        

### **ES6 Features in TypeScript**

- **Template Literals**:
    
    ```tsx
    typescript
    Copy code
    const user = 'Robert';
    console.log(`Hello, ${user}`);
    
    ```
    
- **Arrow Functions**:
    
    ```tsx
    typescript
    Copy code
    const greet = (name: string = 'Robert') => console.log(`Hello, ${name}`);
    
    ```
    
- **Default Parameters**:
    
    ```tsx
    typescript
    Copy code
    greet(); // Prints: "Hello, Robert"
    
    ```
    
- **Spread Operators**:
    
    ```tsx
    typescript
    Copy code
    const nums: number[] = [-3, 33, 38, 5];
    console.log(Math.min(...nums));
    const newNums: number[] = [55, ...nums];
    console.log(newNums);
    
    ```
    
- **Array Destructuring**:
    
    ```tsx
    typescript
    Copy code
    const results: number[] = [3.89, 2.99, 1.38];
    const [res1, res2, res3] = results;
    
    ```
    
- **Object Destructuring**:
    
    ```tsx
    typescript
    Copy code
    const scientist = { firstName: 'Robert', experience: 9000 };
    const { firstName, experience } = scientist;
    
    ```
    

### **Classes**

- TypeScript supports OOP concepts like public, private, and protected members.
    
    ```tsx
    
    class Person {
      private type: string | null = null;
      protected age: number = 23;
    
      constructor(public name: string, public userName: string, private email: string) {}
    
      public printAge() {
        console.log(this.age);
        this.setType('Young guy');
      }
    
      private setType(type: string) {
        this.type = type;
        console.log(this.type);
      }
    }
    
    const person = new Person('Rob', 'rm', 'email@example.com');
    person.printAge(); // Accessible
    // person.setType('Cool'); // Not accessible
    
    ```
    

### **Private Members**

- Private members can only be accessed within the class.
- Protected members can be accessed by derived classes.

### **Inheritance**

- Subclasses can use **`protected`** members and inherited methods.
    
    ```tsx
    typescript
    Copy code
    class Type {
      private type: string | null = null;
      setType(type: string) {
        this.type = type;
        console.log(this.type);
      }
    }
    
    class Person extends Type {
      constructor(public name: string, private email: string) {
        super();
      }
    }
    
    ```
    

### **Final Keyword**

- TypeScript currently lacks a **`final`** keyword for preventing inheritance (proposal under discussion).

---

### **Class Inheritance**

- **Concept**: TypeScript is a structural type system, meaning that types are compatible if their members are compatible.
- **Extending Classes**: Use the **`extends`** keyword to inherit parent class members.
- **`super()`**: Call the parent class's constructor in the derived class to initialize inherited members.
    
    ```tsx
    
    class Robert extends Person {
      constructor(userName: string, email: string) {
        super('Robert Molina', userName, email);
        this.age = 25;
      }
    }
    const robert = new Robert('rmolinamir', 'example@email.com');
    
    ```
    

---

### **Getters & Setters**

- **Getters**: Access properties of a class.
- **Setters**: Modify properties of a class with additional logic.
- Syntax:
    
    ```tsx
    
    class Plant {
      private _species: string = 'Default';
      get species() {
        return this._species;
      }
      set species(value: string) {
        this._species = value.length > 3 ? value : 'Default';
      }
    }
    const plant = new Plant();
    plant.species = 'Green Plant'; // Updates successfully
    
    ```
    

---

### **Static Properties & Methods**

- **Static Members**: Belong to the class itself and are accessed without instantiating the class.
    
    ```tsx
    
    class Helpers {
      static PI: number = 3.14;
      static calcCircumference(diameter: number): number {
        return this.PI * diameter;
      }
    }
    console.log(Helpers.PI);
    console.log(Helpers.calcCircumference(10));
    
    ```
    

---

### **Abstract Classes**

- **Definition**: Cannot be instantiated directly and may include abstract methods that must be implemented by subclasses.
- Syntax:
    
    ```tsx
    
    abstract class Project {
      abstract changeName(name: string): void;
      calcBudget() {
        return this.budget * 2;
      }
    }
    class ITProject extends Project {
      changeName = (name: string) => {
        this.projectName = name;
      }
    }
    const project = new ITProject();
    
    ```
    

---

### **Private Constructors & Singletons**

- **Private Constructor**: Prevents direct instantiation of a class.
- **Singleton**: Ensures only one instance of a class exists.
    
    ```tsx
    
    class OnlyOne {
      private static instance: OnlyOne;
      private constructor(public readonly name: string) {}
      static getInstance() {
        if (!OnlyOne.instance) {
          OnlyOne.instance = new OnlyOne('Singleton');
        }
        return OnlyOne.instance;
      }
    }
    const singleton = OnlyOne.getInstance();
    
    ```
    

---

### **Modules**

- **Definition**: Isolated scope for variables, functions, and classes. Use **`export`** to make declarations accessible outside.
- **Export Examples**:
    
    ```tsx
    
    export const PI = 3.14;
    export default function calculateRectangle(width: number, length: number) {
      return width * length;
    }
    
    ```
    
- **Import Examples**:
    
    ```tsx
    
    import { PI } from './circle';
    import calculateRectangle from './rectangle';
    
    ```
    

---

## **Advanced Module Loading**

1. **Dynamic Imports:**
    - Use to load modules conditionally, improving performance and reducing initial load time.
    - Syntax: `import id = require('module')`.
    - Example:
        
        ```tsx
        declare function require(moduleName: string): any;
        if (condition) {
            let Module = require('./Module');
        }
        
        ```
        
    - Ensures type safety using `typeof`.
2. **Examples:**
    - **Node.js:**
        
        ```tsx
        declare function require(moduleName: string): any;
        if (needValidation) {
            let Validator: typeof ValidatorModule = require('./ValidatorModule');
            let validator = new Validator();
        }
        
        ```
        
    - **RequireJS:**
        
        ```tsx
        require(['./ValidatorModule'], (Validator: typeof ValidatorModule) => {
            let validator = new Validator();
        });
        
        ```
        
    - **SystemJS:**
        
        ```tsx
        System.import('./ValidatorModule').then((Validator: typeof ValidatorModule) => {
            let validator = new Validator();
        });
        
        ```
        

---

## **Namespaces**

1. **Overview:**
    - Organize code using `namespace` (internal modules).
    - Replace `module` keyword with `namespace` to avoid confusion.
    - Use `export` for accessible components.
    - Import via triple-slash reference (`/// <reference path="...">`).
2. **Example Structure:**
    - `circleMath.ts`:
        
        ```tsx
        namespace MyMath {
            export namespace Circle {
                export const PI = 3.14;
                export const calculateCircumference = (diameter: number) => diameter * PI;
            }
        }
        
        ```
        
    - `rectangleMath.ts`:
        
        ```tsx
        namespace MyMath {
            export namespace Rectangle {
                export const calculateRectangle = (width: number, length: number) => width * length;
            }
        }
        
        ```
        
    - `app.ts`:
        
        ```tsx
        /// <reference path="./circleMath.ts" />
        /// <reference path="./rectangleMath.ts" />
        import Circle = MyMath.Circle;
        console.log(Circle.calculateCircumference(10));
        
        ```
        

---

## **Ambient Modules**

1. **Definition:**
    - Used for third-party libraries in `.d.ts` files.
    - Example for Node.js modules:
        
        ```tsx
        declare module "path" {
            export function join(...paths: string[]): string;
        }
        
        ```
        
2. **Dynamic Imports with `require` and `@types`:**
    - Use `@types` for better IDE support and type definitions.
    - Example with `@types/jquery`:
        
        ```tsx
        $('button').click(() => alert('Button clicked!'));
        
        ```
        
3. **Example Structure:**
    - `jquery.d.ts`:
        
        ```tsx
        declare var $: any;
        
        ```
        
    - `app.ts`:
        
        ```tsx
        $('button').click(() => alert('Clicked!'));
        
        ```
        

---

## **Using `@types` Packages**

1. **Advantages:**
    - Provides type definitions for JavaScript libraries.
    - Avoids manual declaration (`declare var $: any`).
    - Example: Install `@types/jquery` for jQuery.
2. **Example Setup:**
    - `package.json`:
        
        ```json
        "devDependencies": {
            "@types/jquery": "^3.3.29"
        }
        
        ```
        
    - `app.ts`:
        
        ```tsx
        $('button').click(() => alert('Button clicked!'));
        
        ```
        

---

## Wildcard Module Declarations

Wildcard module declarations allow the import of non-JavaScript content in cases where special loading semantics are required. For example:

```tsx
declare module "*!text" {
    const content: string;
    export default content;
}

declare module "json!*" {
    const value: any;
    export default value;
}

```

## UMD Modules

UMD modules can be accessed through imports or as global variables. Example:

```tsx
export function isPrime(x: number): boolean;
export as namespace mathLib;

```

## Interfaces

Interfaces define the structure of objects and enforce contracts within code. Example:

```tsx
interface SimplePerson {
    firstName: string;
}

const simplePerson: SimplePerson = { firstName: 'Robert' };
const simpleGreet = (simplePerson: SimplePerson) => console.log(`Hello ${simplePerson.firstName}!`);
simpleGreet(simplePerson); // Prints: "Hello Robert!"

```

### Optional Properties

Optional properties are denoted using `?`:

```tsx
interface SimplePerson {
    firstName: string;
    lastName?: string;
    age?: number;
}

const right: SimplePerson = { firstName: 'Robert', age: 24 };

```

### Index Signatures (Dynamic Property Names)

Allows defining objects with dynamic keys:

```tsx
interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
}

const person: NamedPerson = {
    firstName: 'Robert',
    lastName: 'Molina',
    age: 24,
    hobbies: ['Programming', 'Cooking'],
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}!`);
    }
};

```

### Implements Keyword

Used to enforce a class to meet an interface contract:

```tsx
interface NamedPerson {
    firstName: string;
    greet(lastName: string): void;
}

class Person implements NamedPerson {
    constructor(public firstName: string, public lastName: string) {}
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}!`);
    }
}

const myPerson = new Person('Robert', 'Molina');
myPerson.greet('Molina');

```

### Extends Keyword (Interface Inheritance)

Interfaces can inherit properties from other interfaces:

```tsx
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

const square: Square = {
    color: "blue",
    sideLength: 10
};

```

Combining multiple interfaces:

```tsx
interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

const square: Square = {
    color: "magenta",
    penWidth: 2.5,
    sideLength: 0.5
};

```

### Omit Type

Omit specific properties from an extended interface:

```tsx
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type InputElementAttributes = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface IInputProps extends Omit<InputElementAttributes, 'onChange'> {
    onChange: (value?: string | number | string[]) => void;
}

```

## Function Interfaces

Interfaces can describe function types:

```tsx
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = (num1: number, num2: number) => {
    return (num1 + num2) * 2;
};

console.log(myDoubleFunction(10, 50)); // Prints: 120

```

---

# Type Checking for Interfaces

Hard checking for interfaces is not yet available in TypeScript, but there are two commonly used methods to achieve similar results:

### 1. Use Type Guards to Check for Instances of Specific Objects

The TypeScript documentation defines a type guard as an expression that performs a runtime check to guarantee a type in some scope. To define a type guard, we define a function whose return type is a type predicate:

```
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
```

### Example: React Scenario

Let’s say our input values are managed programmatically and could either be of type `value` or objects with an `IValue` interface. We need to determine if an object is of type `IValue`.

**Typings and onChangeHandler:**

```tsx
type value = string | number | string[];

interface IValue {
  value: value;
  [propName: string]: any;
}

/**
 * `ISelectValue` interface type checker.
 */
const instanceOfIValue = (object: any): object is IValue => {
  if (object && object.inputData) {
    return 'inputData' in object; // true
  }
  return false;
}

const onChangeHandler = (inputData: value | IValue): value => {
  // Checking for IValue object.
  if (instanceOfIValue(inputData)) {
    return inputData.value;
  }
  // Otherwise, simply return the inputData which will be of type value.
  return inputData;
}
```

This approach ensures scalability since `instanceOfIValue` can be reused across multiple places. However, for objects with numerous properties, discriminators might be more efficient.

---

### 2. Use Discriminators to Check for Instances of Specific Objects

When checking multiple object properties becomes cumbersome, a discriminator can simplify the process.

### Example:

Adding a `discriminator` property to the `IValue` interface:

```tsx
type value = string | number | string[];

interface IValue {
  value?: value;
  displayValue: string;
  discriminator: 'IValue';
  [propName: string]: any;
}

/**
 * `ISelectValue` interface type checker.
 */
const instanceOfIValue = (object: any): object is IValue => {
  if (object && object.discriminator) {
    return object.discriminator === 'IValue';
  }
  return false;
}

const onChangeHandler = (inputData: value | IValue): value => {
  // Checking for IValue object.
  if (instanceOfIValue(inputData)) {
    return inputData.value || inputData.displayValue;
  }
  // Otherwise, simply return the inputData which will be of type value.
  return inputData;
}
```

Using a discriminator simplifies property checks, improving code clarity and maintainability.

---

# Generics

Generics allow the creation of reusable components that can operate on various data types, enhancing flexibility and type safety.

### Simple Generics

Example of a basic generic function:

```tsx
function echo(data: any) {
  return data;
}

console.log(echo('Robert')); // Prints: "Robert"
console.log(echo(24).length); // Prints: undefined
console.log(echo({ name: 'Robert', age: 24 })); // Prints: { name: "Robert", age: 24 }
```

While this function is generic, it lacks type safety and IDE support. The TypeScript compiler cannot infer the return type, potentially causing runtime errors.

---

### Better Generics

Improving type safety and IDE support by explicitly defining generics:

```tsx
function betterEcho<T>(data: T): T {
  return data;
}

// Now the compiler and IDE know the return type of betterEcho.
console.log(betterEcho('Robert').length); // Compiler recognizes `length` as valid.
console.log(betterEcho<number>(24).toExponential(2));
console.log(betterEcho({ name: 'Robert', age: 24 }).age);
```

Using `<T>` specifies that the function returns a type matching the argument's type, improving clarity and reducing errors.

---

### Built-in Generics

Many types in TypeScript have built-in generics. For example:

```tsx
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
// testResults.push('string'); // Error: Type 'string' is not assignable.

function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}

printAll<string>(['Apple', 'Banana']);
printAll<number>([1, 3, 5]);
// printAll<number>([1, 'string', 5]); // Error: Type 'string' is not assignable.
```

Arrays inherently support generics, enabling stricter type enforcement.

---

### Generic Types

Generic types allow defining variables, functions, or interfaces with a generic type.

### Functions:

```tsx
function betterEcho<T>(data: T): T {
  return data;
}

const echoStr: <T>(data: T) => T = betterEcho;
console.log(echoStr<string>('Hello world!').toUpperCase()); // Prints: "HELLO WORLD!"

const echoNum: <T>(data: T) => T = betterEcho;
console.log(echoNum<number>(312).toString()); // Prints: "312"
```

### Interfaces:

```tsx
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

In this example, the `GenericIdentityFn` interface ensures type safety by locking in the type argument (e.g., `number`) for all calls.

---

## Generic Classes

A generic class is defined with a generic type parameter list enclosed in angle brackets (`<>`) following the class name. This allows for type flexibility, enabling the use of various data types while maintaining type safety.

### Example with Constraints

Generic types can be constrained to specific types using the `extends` keyword. For instance, the following example demonstrates how to constrain a generic type `T` to either `number` or `string`:

```tsx
class GenericMath<T extends number | string> {
    constructor(public baseValue: T, public multiplyValue: T) {}

    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const onlyNumbers = new GenericMath<number>(10, 20);
const onlyStrings = new GenericMath<string>('10', '20');
const bothTypes = new GenericMath<number | string>(10, '20');

console.log(onlyNumbers.calculate()); // Prints: 200
console.log(onlyStrings.calculate()); // Prints: 200
console.log(bothTypes.calculate());   // Prints: 200

```

### Example with Multiple Generic Types

You can define multiple generic types and constrain them to different types:

```tsx
class MultipleTypesMath<T extends number, U extends number | string> {
    constructor(public baseValue: T, public multiplyValue: U) {}

    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const multipleTypesMath = new MultipleTypesMath<number, number | string>(5, '20');

console.log(multipleTypesMath.calculate()); // Prints: 100

```

---

## Decorators

Decorators are special declarations used to annotate or modify classes, methods, properties, or parameters. They use the `@expression` syntax and are currently an experimental feature in TypeScript. To enable decorators, the `experimentalDecorators` compiler option must be set to `true`.

### Enabling Decorators

**Command Line:**

```bash
tsc --target ES5 --experimentalDecorators

```

**tsconfig.json:**

```json
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}

```

### Basic Decorator Example

A decorator can be used to add functionality to a class:

```tsx
function logged(constructorFn: Function) {
    console.log(constructorFn); // Logs the class constructor
}

@logged
class Person {
    constructor() {
        console.log('Hi!');
    }
}

```

### Decorator Factory

A factory is a function that returns a decorator, allowing customization:

```tsx
function logging(value: boolean) {
    return value ? logged : () => {};
}

@logging(true)
class Car {}

```

### Advanced Decorator Example

Decorators can modify the prototype of a class:

```tsx
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
        this.name = 'Red Plant';
    };
}

@printable
class Plant {
    private name = 'Green Plant';
}

const plant = new Plant();
(<any>plant).print();
console.log(plant); // The name property is updated to "Red Plant."

```

---

## Method Decorator

A method decorator modifies the method's `PropertyDescriptor` to control its behavior:

```tsx
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    };
}

class Project {
    constructor(public projectName: string) {}

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project('Super Project');
project.calcBudget();
// project.calcBudget = () => { console.log(2000); }; // Error if @editable is set to false

```

---

## Property Decorator

A property decorator is used to observe or modify a property at runtime:

```tsx
function overwritable(value: boolean): any {
    return function(target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}

class Project {
    @overwritable(false)
    private projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }
}

```

---

## Parameter Decorator

A parameter decorator observes the parameters of a method:

```tsx
function logParameter(target: any, methodName: string, paramIndex: number) {
    console.log(`Parameter in method ${methodName} at index ${paramIndex}`);
}

class Course {
    registerStudent(@logParameter studentName: string) {
        console.log(`${studentName} registered!`);
    }
}

```

In the above example, the decorator logs the parameter index of the `registerStudent` method.

---

### Webpack Workflow for TypeScript (v^4.X)

### TypeScript Setup with Webpack:

1. **Install TypeScript Compiler and Loader:**
    
    ```bash
    npm install --save-dev typescript ts-loader
    
    ```
    
2. **Initialize TypeScript Configuration:**
    
    ```bash
    tsc --init
    
    ```
    
    Modify `tsconfig.json` to:
    
    ```json
    {
      "compilerOptions": {
        "outDir": "./dist/",
        "noImplicitAny": true,
        "module": "es6",
        "target": "es5",
        "jsx": "react",
        "allowJs": true
      }
    }
    
    ```
    
3. **Webpack Configuration (`webpack.config.js`):**
    
    ```jsx
    const path = require('path');
    
    module.exports = {
      entry: "./src/app.ts",
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
      devtool: "source-map",
      resolve: {
        extensions: ["*", ".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          { test: /\\.tsx?$/, loader: "ts-loader" }
        ]
      }
    };
    
    ```
    

This configuration ensures TypeScript files (`.ts` and `.tsx`) are processed via `ts-loader` and bundled into `bundle.js`.

---

### TypeScript with React.js

### Create React App with TypeScript:

1. **Initialize React App with TypeScript:**
    
    ```bash
    npx create-react-app project-name --scripts-version=react-scripts-ts
    
    ```
    
2. **Example Using Interfaces for Props and State:**
    
    **`App.tsx`:**
    
    ```tsx
    interface IAppProps { [propName: string]: any; }
    interface IAppState {
      counterValue: number;
    }
    
    class App extends React.Component<IAppProps, IAppState> {
      public state = { counterValue: 0 };
    
      public render() {
        return (
          <div>
            <p>
              <CounterOutput
                counter={this.state.counterValue}
                onClick={this.counterHandler} />
            </p>
          </div>
        );
      }
    
      private counterHandler = (mode: ECounterHandlers) => {
        this.setState(prevState => {
          switch(mode) {
            case ECounterHandlers.Dec:
              return { counterValue: prevState.counterValue - 1 };
            case ECounterHandlers.Inc:
              return { counterValue: prevState.counterValue + 1 };
          }
        });
      };
    }
    
    export default App;
    
    ```
    
    **`CounterOutput.tsx`:**
    
    ```tsx
    export enum ECounterHandlers {
      Inc,
      Dec
    }
    
    interface ICounterOutputProps {
      counter: number;
      onClick: (mode: ECounterHandlers) => void;
    }
    
    const CounterOutput = (props: ICounterOutputProps) => {
      return (
        <div>
          <p>{props.counter}</p>
          <button onClick={() => props.onClick(ECounterHandlers.Dec)}>Decrement</button>
          <button onClick={() => props.onClick(ECounterHandlers.Inc)}>Increment</button>
        </div>
      );
    };
    
    export default CounterOutput;
    
    ```
    
3. **TSLint Configuration:**
Modify `tslint.json`:
    
    ```json
    {
      "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
      "linterOptions": {
        "exclude": [
          "config/**/*.js",
          "node_modules/**/*.ts",
          "coverage/lcov-report/*.js"
        ]
      },
      "rules": {
        "jsx-no-lambda": false
      }
    }
    
    ```
    

---

### Common React Prop Types with TypeScript

### 1. **References:**

- **SVG Example:**
    
    ```tsx
    interface ISVGProps {
      reference?: React.RefObject<SVGSVGElement>;
    }
    
    const SVG = (props: ISVGProps) => {
      return (
        <svg ref={props.reference}>
          <path d='M0,0 10,10 20,0' />
        </svg>
      );
    };
    
    ```
    
- **Button Example:**
    
    ```tsx
    interface IButtonProps {
      reference?: React.RefObject<HTMLButtonElement>;
    }
    
    const Button = (props: IButtonProps) => {
      return (
        <button ref={props.reference}></button>
      );
    };
    
    ```
    

### 2. **Children:**

```tsx
interface IButtonProps {
  children?: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  return (
    <button>{props.children}</button>
  );
};

```

### 3. **CSS Properties and Class Names:**

```tsx
interface IButtonProps {
  style?: React.CSSProperties;
  className?: string;
}

const Button = (props: IButtonProps) => {
  return (
    <button style={props.style} className={props.className}></button>
  );
};

```

### 4. **HTML5 Button Props:**

```tsx
interface IButtonData {
  type?: string;
  name?: string;
  value?: string | number | string[] | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

interface IButtonProps {
  data: IButtonData;
}

const Button = (props: IButtonProps) => {
  return (
    <button {...props.data}></button>
  );
};

```

---

### **React Hooks and Generics**

Generics are used heavily with hooks to type variables like state values returned from hooks like **`useState`**.

**Key Concepts:**

- Generics define the type of variables/hooks.
- Example with **`useState`** for typing:
    
    ```tsx
    typescript
    Copy code
    const [state, setState] = useState<number | null>(null);
    
    ```
    

**Detailed Type Definitions:**

- **`Dispatch`** and **`SetStateAction`** are type aliases for generality:
    
    ```tsx
    typescript
    Copy code
    type Dispatch<A> = (value: A) => void;
    type SetStateAction<S> = S | ((prevState: S) => S);
    
    ```
    

---

### **useState Hook**

Typing **`useState`** can be done by:

1. Typing the **returned value**.
2. Typing the **hook itself**.
3. Both (though overkill).

**Example:**

```tsx
typescript
Copy code
const [settings, setSettings] = useState<ISettings>(initialSettings);

```

**Practical Use:** A slider component with default and dynamic settings:

```tsx
typescript
Copy code
interface ISettings {
  slidingDuration: number;
  isSmartSliding: boolean;
  shouldAutoplay: boolean;
  width: string | number;
  height: string | number;
}

const initialSettings: ISettings = {
  slidingDuration: 500,
  isSmartSliding: true,
  shouldAutoplay: true,
  width: '100%',
  height: '100%',
};

const [settings, setSettings] = React.useState<ISettings>(initialSettings);

React.useEffect(() => {
  setSettings((prev) => ({ ...prev, ...props.settings }));
}, [props.settings]);

```

---

### **useEffect Hook**

- Executes a function whenever dependencies change.
- Typing is handled automatically within the scope.
- Defined by React as:
    
    ```tsx
    typescript
    Copy code
    function useEffect(effect: EffectCallback, deps?: DependencyList): void;
    
    type EffectCallback = () => (void | (() => void | undefined));
    type DependencyList = ReadonlyArray<any>;
    
    ```
    

**Example:**

```tsx
typescript
Copy code
React.useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);

```

---

### **useContext Hook**

- Fetches values from a React context.
- Requires generic typing for reusability.
- Defined by React as:
    
    ```tsx
    typescript
    Copy code
    function useContext<T>(context: Context<T>): T;
    
    ```
    

**Example with Context Provider:**

```tsx
typescript
Copy code
interface IContextProps {
  className?: string;
  style?: React.CSSProperties;
}

const Context = React.createContext<IContextProps>({});

const ButtonComponent: React.FC = () => {
  const context = useContext(Context);
  return <button className={context.className} style={context.style}>Click Me</button>;
};

```

**Advanced Use:** Higher-order component (**`HOC`**) to compose multiple contexts:

```tsx
typescript
Copy code
const withContexts = (
  WrappedComponent: React.FC,
  Contexts: { [key: string]: React.Context<any> }
) => {
  return (props: any) => {
    const contextValues = Object.keys(Contexts).reduce(
      (acc, key) => ({ ...acc, [key]: useContext(Contexts[key]) }),
      {}
    );

    return <WrappedComponent {...props} {...contextValues} />;
  };
};

```

---
