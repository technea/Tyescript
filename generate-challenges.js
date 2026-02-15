// JavaScript script to generate simple TypeScript challenges
const fs = require('fs');
const path = require('path');

// Create src/challenge directory if it doesn't exist
const challengeDir = path.join(__dirname, 'src', 'challenge');
if (!fs.existsSync(challengeDir)) {
  fs.mkdirSync(challengeDir, { recursive: true });
}

// Generate challenge files from 6 to 55
for (let i = 6; i <= 55; i++) {
  const fileName = path.join(challengeDir, `challenge${i}.ts`);
  const title = `Challenge ${i}: TypeScript Concept ${i}`;
  
  const content = `// ${title}
// Simple TypeScript example for challenge ${i}

// Variable declarations
let numberValue: number = ${i * 10};
let stringValue: string = "Challenge ${i}";
let booleanValue: boolean = ${i % 2 === 0};

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
  id: ${i},
  name: "User ${i}",
  email: "user${i}@example.com"
};

// Output to console
console.log("${title}");
console.log(\`Number value: \${numberValue}\`);
console.log(\`String value: \${stringValue}\`);
console.log(\`Boolean value: \${booleanValue}\`);
console.log(\`Addition result: \${result}\`);
console.log(\`Doubled numbers: \${doubled}\`);
console.log("User:", user);

// Simple condition
if (booleanValue) {
  console.log("Even challenge number");
} else {
  console.log("Odd challenge number");
}
`;

  fs.writeFileSync(fileName, content, 'utf8');
  console.log(`Created ${fileName}`);
}

console.log('\nAll 50 challenges created!');