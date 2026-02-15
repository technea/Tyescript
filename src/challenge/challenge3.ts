// Challenge 3: Intersection Types
// 1. Create types that combine multiple types
// 2. Interface intersections
// 3. Type alias intersections
// 4. Function that takes an object with multiple properties

interface Person {
  name: string;
  age: number;
}

interface Employee {
  id: number;
  department: string;
}

// Intersection type combining Person and Employee
type PersonEmployee = Person & Employee;

const worker: PersonEmployee = {
  name: "John Doe",
  age: 30,
  id: 12345,
  department: "Engineering"
};

// Type alias intersections
type A = { a: number };
type B = { b: string };
type C = { c: boolean };
type ABC = A & B & C;

const abc: ABC = {
  a: 42,
  b: "Hello",
  c: true
};

// Intersection with union types
type StringNumber = string & number; // never type
type NumberBoolean = number & boolean; // never type

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Order {
  orderId: string;
  date: Date;
}

type ProductOrder = Product & Order;

function printProductOrder(item: ProductOrder): void {
  console.log(`Order ${item.orderId} (${item.date.toLocaleDateString()})`);
  console.log(`Product: ${item.name} (ID: ${item.id})`);
  console.log(`Price: $${item.price.toFixed(2)}`);
}

const order: ProductOrder = {
  id: 101,
  name: "Laptop",
  price: 999.99,
  orderId: "ORD-2024-001",
  date: new Date()
};

printProductOrder(order);