// Challenge 37: TypeScript Concept 37
// Simple TypeScript example for challenge 37

// Variable declarations
let numberValue: number = 370;
let stringValue: string = "Challenge 37";
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
  id: 37,
  name: "User 37",
  email: "user37@example.com"
};

// Output to console
console.log("Challenge 37: TypeScript Concept 37");
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
