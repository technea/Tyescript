// Challenge 23: TypeScript Concept 23
// Simple TypeScript example for challenge 23

// Variable declarations
let numberValue: number = 230;
let stringValue: string = "Challenge 23";
let booleanValue: boolean = false;

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
  id: 23,
  name: "User 23",
  email: "user23@example.com"
};

// Output to console
console.log("Challenge 23: TypeScript Concept 23");
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
