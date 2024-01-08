// console.log("Hello World");

// function sum (a,b) {
//     return a + b;
// }
// console.log(sum(4,5));


const sum = require("./math-module").sum;
const atimti = require("./math-module").subtract;

console.log(sum(4,5));  
console.log(atimti(5,4));  