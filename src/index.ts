// ===========================
// | Variable
// ===========================

// let age: number = 30;

// if (age < 50) age += 10;

// console.log(age);

// ===========================
// | Array
// ===========================

// let numbers = [1, 2, 3];
// numbers.push(4);
// numbers.forEach((n) => console.log(n));

// ===========================
// | Enum
// ===========================

// const enum Color { Red, Green, Blue }
// let c: Color = Color.Red;
// console.log(c);

// ===========================
// | Function
// ===========================

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

console.log(calculateTax(10_000, 2023));

// That should be okay to start.