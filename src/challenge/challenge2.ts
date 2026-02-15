// Challenge 2: Union Types
// 1. Create variables with union types (string | number, number | boolean, etc.)
// 2. Function that takes a value that can be string or number, returns its type
// 3. Type guard example

let union1: string | number = "Hello";
union1 = 42; // Also valid

let union2: number | boolean = true;
union2 = 3.14; // Also valid

let union3: string | number | boolean | null = null;

function getType(value: string | number | boolean): string {
  return typeof value;
}

// Type guard
function isString(value: any): value is string {
  return typeof value === "string";
}

function printValue(value: string | number): void {
  if (isString(value)) {
    console.log(`String value: ${value.toUpperCase()}`);
  } else {
    console.log(`Number value: ${value.toFixed(2)}`);
  }
}

printValue("typescript");
printValue(42.5);

// Union types with arrays
let mixedArray: (string | number)[] = ["a", 1, "b", 2];