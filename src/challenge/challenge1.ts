// Challenge 1: Basic Types
// 1. Create variables with different basic types (string, number, boolean, null, undefined, any)
// 2. Function that takes a name and age, returns a greeting string
// 3. Type annotations for function parameters and return type

let message: string = "Hello, TypeScript!";
let age: number = 30;
let isStudent: boolean = true;
let emptyValue: null = null;
let undefinedValue: undefined = undefined;
let anyValue: any = "This can be any type";

function greet(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Alice", 25));

// Type inference
let inferredNumber = 42; // TypeScript infers number
let inferredString = "Inferred string"; // TypeScript infers string