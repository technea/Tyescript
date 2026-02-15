// Challenge 5: Interfaces
// 1. Create interfaces for objects
// 2. Optional properties
// 3. Read-only properties
// 4. Interface inheritance
// 5. Function types in interfaces

interface Animal {
  name: string;
  age: number;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    console.log("Woof!");
  }
}

class Cat implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    console.log("Meow!");
  }
}

const dog = new Dog("Buddy", 3);
const cat = new Cat("Whiskers", 2);
dog.makeSound();
cat.makeSound();

// Optional properties
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99
};

const product2: Product = {
  id: 2,
  name: "Phone",
  price: 699.99,
  description: "Latest model with 128GB storage"
};

// Read-only properties
interface User {
  readonly id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 123,
  name: "John Doe",
  email: "john@example.com"
};

// user.id = 456; // Error: Cannot assign to 'id' because it is a read-only property

// Interface inheritance
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

interface Circle extends Shape {
  radius: number;
}

const square: Square = {
  color: "red",
  sideLength: 10
};

const circle: Circle = {
  color: "blue",
  radius: 5
};

// Function types in interfaces
interface SearchFunction {
  (source: string, subString: string): boolean;
}

const search: SearchFunction = (source, subString) => {
  return source.includes(subString);
};

console.log(search("Hello, TypeScript!", "TypeScript"));