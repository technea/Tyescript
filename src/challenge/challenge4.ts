// Challenge 4: Type Aliases
// 1. Create type aliases for primitive types
// 2. Type aliases for objects
// 3. Type aliases for unions
// 4. Type aliases for functions

// Primitive type aliases
type StringAlias = string;
type NumberAlias = number;
type BooleanAlias = boolean;

let name: StringAlias = "Alice";
let age: NumberAlias = 30;
let isActive: BooleanAlias = true;

// Object type aliases
type User = {
  id: number;
  name: string;
  email: string;
  isVerified?: boolean; // Optional property
};

const user1: User = {
  id: 1,
  name: "Bob Smith",
  email: "bob@example.com"
};

const user2: User = {
  id: 2,
  name: "Carol Johnson",
  email: "carol@example.com",
  isVerified: true
};

// Union type aliases
type StringOrNumber = string | number;
type Status = "active" | "inactive" | "pending";

let value: StringOrNumber = "Hello";
value = 42;

let userStatus: Status = "active";

// Function type aliases
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;

console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(6, 7));

// Generic type aliases
type Box<T> = {
  value: T;
  getValue(): T;
};

const numberBox: Box<number> = {
  value: 42,
  getValue() {
    return this.value;
  }
};

const stringBox: Box<string> = {
  value: "TypeScript",
  getValue() {
    return this.value;
  }
};

console.log(numberBox.getValue());
console.log(stringBox.getValue());