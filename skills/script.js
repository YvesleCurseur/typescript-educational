// const age = 20;
// if (age >= 18){
//     console.log("Vous êtes majeur !");
// }
/* SIMPLE COMPARAISON */
// let temperature = 5;
// if (temperature <= 10){
//     console.log("It's Freezing !");
// } else if (temperature >= 20){
//     console.log("It's chilly.");
// }else{
//     console.log("It's warm");
// }
/* SIMPLE COMPARAISON */
// const orderStatus : "pending" | "shipped" | "delivered" = "shipped";
// if (orderStatus === "pending"){
//     console.log("Order is pending !");
// } else if (orderStatus === "shipped"){
//     console.log("Order is shipped !");
// }else{
//     console.log("Delivered !");
// }
// console.log( Number("Number"), Math.sqrt(-1), 0/0);
// console.log("hello " + "World");
// const concatenateString = "hello " + "world";
// console.log("hello" + 5, 3 + "4");
// const x: null | number = 11;
// // checking the type & the value here
// if (x === null){
//     // x is null or undefined
//     console.log(true);
// }
// console.log(x > 10 && x < 20 );
// const age = 18
/* FUNCTIONS */
// function calculateAreaOfCircle(radius: number): number {
//     const pi = 3.14;
//     const area = pi * radius * radius;
//     return area;
// };
// const result = calculateAreaOfCircle(89);
// function printAreaOfCircle(area: number): void {
//     return console.log(`The area of the circle is ${area}`);
// }
// printAreaOfCircle(result);
/* SUPRA FUNCTION */
// function areaOfRectangle(length: number, width: number): number {
//     return length * width;
// };
/* ARROW FUNCTION */
// const anotherFn: (length: number, width: number) => number = areaOfRectangle;
// type AreaofRectangle = (length: number, width: number) => number;
// function areaOfRectangle(length: number, width: number): number {
//     return length * width;
// };
// // Declare a function as a variable
// const anotherFn : AreaofRectangle = (length, width) => {
//     return length * width;
// }
/* CHALLENGE I */
// function operationWithNumber(a: number, b: number): number | string {
//   if (typeof a !== "number" && typeof b !== "number") {
//     return "The number are incorrect";
//   }
//   return a * b;
// }
// const result = operationWithNumber(12, -3);
// console.log(result);
/* CHALLENGE II */
// type Relationship = "Not Equal" | "Equal" | "Invalid" | "Something went wrong";
// function relationshipNumber(a: number, b: number): Relationship {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Invalid";
//   }
//   if (a === b) {
//     return "Equal";
//   }
//   if (a !== b) {
//     return "Not Equal";
//   }
//   return "Something went wrong";
// }
// const result1 = relationshipNumber(3, 3);
// console.log(result1);
/* DECLARATION */
// const str = "5";
// // const number = +"5asd";
// const number = parseInt("555.34frzfrz");
// console.log(number);
/* INCREMENT */
// let x = 5;
// x++;
// ++x;
// x += 1;
// console.log("Increment", x);
/* DECREMENT */
// let y = 5;
// y--;
// --y;
// y -= 1;
// console.log("Decrement", y);
/* CONVERT TO NUMBER */
// const number = 20;
// const n = number.toString();
// console.log(n);
/* CONVERT TO NUMBER */
// const number = "20.5";
// const n = Number(number);
// console.log(n);
/* CHALLENGE MODULO */
// let num = 15;
// if (num % 5 === 0 && num % 3 === 0){
//     console.log("Pass");
// }else{
//     console.log("Fail");
// }
/* LOOP */
var number = 1;
while (number <= 10) {
    if (number % 2 === 0) {
        number;
        continue;
    }
    console.log(number);
}
;
console.log(number);
