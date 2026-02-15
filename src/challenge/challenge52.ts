// Challenge 52: TypeScript Concept 52
// Simple TypeScript example for challenge 52

// Variable declarations
let numberValue: number = 520;
let stringValue: string = "Challenge 52";
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
  id: 52,
  name: "User 52",
  email: "user52@example.com"
};

// Output to console
console.log("Challenge 52: TypeScript Concept 52");
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
