// Challenge 34: TypeScript Concept 34
// Simple TypeScript example for challenge 34

// Variable declarations
let numberValue: number = 340;
let stringValue: string = "Challenge 34";
let booleanValue: boolean = true;

// Basic function
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Function call
const result = addNumbers(numberValue, 5);

// Array operations
const numbers: number[] = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

// Object literal
const user = {
  id: 34,
  name: "User 34",
  email: "user34@example.com"
};

// Output to console
console.log("Challenge 34: TypeScript Concept 34");
console.log(`Number value: ${numberValue}`);
console.log(`String value: ${stringValue}`);
console.log(`Boolean value: ${booleanValue}`);
console.log(`Addition result: ${result}`);
console.log(`Doubled numbers: ${doubled}`);
console.log("User:", user);

// Simple condition
if (booleanValue) {
  console.log("Even challenge number");
} else {
  console.log("Odd challenge number");
}
