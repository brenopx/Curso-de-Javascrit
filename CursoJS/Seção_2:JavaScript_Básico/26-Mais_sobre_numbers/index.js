// IEEE 754-2008
let num1 = 1;   //number
let num2 = 2.5; //number

// console.log(num1.toString() + num2.toString());
// console.log(num1.toString() + num2);
// console.log(typeof(num1));

num1 = 1500;
console.log(num1.toString(2)); // Vendo a representação em Binario.

num1 = 10.5879451610;
console.log(num1.toFixed(4));

console.log(Number.isInteger(num1));

let temp = num1 * 'ola';
console.log(temp);
console.log(Number.isNaN(temp));

temp = num1 + '5';
console.log(temp);

num1 = 0.7;
num2 = 0.1;

console.log(num1 + num2);

num1 += num2; // num1 = num1 + num2;
num1 += num2; // 0.9
num1 += num2; // 1.0

num1 = num1.toFixed(2);
num1 = parseFloat(num1.toFixed(2)); // resolve o problema.
num1 = Number(num1.toFixed(2)); // resolve o problema.

console.log(num1);
console.log(Number.isInteger(num1));
