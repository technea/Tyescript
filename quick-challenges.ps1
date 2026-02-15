# Quick PowerShell script to generate simple TypeScript challenges

for ($i = 6; $i -le 55; $i++) {
    $fileName = "src/challenge/challenge$i.ts"
    $title = "Challenge " + $i + ": TypeScript Concept " + $i
    $content = "// " + $title + "
// Simple TypeScript example for challenge " + $i + "

// Variable declarations
let numberValue: number = " + ($i * 10) + ";
let stringValue: string = `"Challenge " + $i + "`";
let booleanValue: boolean = " + ($i % 2 === 0) + ";

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
  id: " + $i + ",
  name: `"User " + $i + "`",
  email: `"user" + $i + "@example.com`"
};

// Output to console
console.log(`"` + $title + `"`);
console.log(`"Number value: `" + numberValue + `"`);
console.log(`"String value: `" + stringValue + `"`);
console.log(`"Boolean value: `" + booleanValue + `"`);
console.log(`"Addition result: `" + result + `"`);
console.log(`"Doubled numbers: `" + doubled + `"`);
console.log(`"User:`, user);

// Simple condition
if (booleanValue) {
  console.log(`"Even challenge number`");
} else {
  console.log(`"Odd challenge number`");
}
"

    $content | Out-File -FilePath $fileName -Encoding utf8
    Write-Host "Created $fileName"
}

Write-Host "`nAll 50 challenges created!"