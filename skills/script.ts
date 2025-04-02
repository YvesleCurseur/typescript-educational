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
// let number = 1;

// while(number <= 10){
//     if (number % 2 === 0){
//         number++;
//         continue;
//     }
//     console.log(number++);
// };

// console.log("Finished !");

// First loop trough the number
// Make the add
// final number divide all the number

// let total_number = 0;
// let counter = 1;

// while (counter <= 100) {
//     total_number += counter;
//     counter++;
// }
// console.log(total_number / 100);

// let total_number = 0;
// let counter = 1;

// while (counter <= 100) {
//     if (counter !== 55){
//         total_number += counter;
//     }
//     counter++;
// }

// console.log(total_number / 100);

/* FIRST VERISON */
// let limit_number = 11;
// let counter = 1;

// while (counter <= 10) {    
//     limit_number--;
//     console.log(limit_number);
//     counter++;
// }

/* SECOND VERISON */
// let counter = 10;

// while (counter >= 1) {    
//     console.log(counter--);
// }

/* SWITCH CASE */
// const day = 1;

// switch (day){
//     case 1:{
//         console.log("Monday");
//         break
//     };
//     case 2:{
//         console.log("Tuesday");
//         break;
//     };
//     case 3:{
//         console.log("Wednesday");
//         break;
//     };
//     default:
//         console.log("THis is not a valid date");
// }

/* CHALLENGE */
// let input = "C";
// switch (input){
//     case "A":{
//         console.log("Good");
//         break;
//     };
//     case "B":
//     case "C":
//     case "D":
//     case "E":{
//         console.log("Ok");
//         break;
//     };
//     case "F":{
//         console.log("Try harder");
//         break;
//     };
//     default:
//         console.log("This is not a valid grade");
// }

/* FOR LOOP */
// let total_number = 0;

// for (let i = 1; i <= 100; i++){
//     total_number += i;
// }

// for (let i = 20; i >= 1; i--){
//     console.log(i)
// }

/* Challenge */
// for (let i = 1; i <= 100; i++){
//     console.log(i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i)
// }


/* FUCNTIONS */

// function addNumber(a: number, b: number): number | undefined {
//     return a+b;
// }

// console.log(addNumber(5, 4));

/* CHALLENGE */

function calculateAverage(a: number, b: number): number | undefined {
    return (a + b) / 2;
}

console.log(calculateAverage(5, 4));

function addString(a: string, b: string): string | undefined {
    return a + b;
}

console.log(addString("You", " Rock!"));

function square(a: number): number | undefined {
    return a ** 2;
}

console.log(square(6));

function sumOfSquare(a: number, b: number): number | undefined {
    const result = (a ** 2) + (b ** 2);
    return result;
}

console.log(sumOfSquare(2, 2));