// String, number, undefined, null, boolean, symbol
// String
const nome = 'Luiz';
const nome1 = "Luiz";

// Number
const num1 = 10;
const num2 = 10.52;

let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
let sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória

// Boolean
const aprovado = false; // valor lógico

console.log(typeof aprovado, num1);

const primitivo1 = 2;
let primitivo2 = primitivo1;
console.log('primitivo1:', primitivo1, 'primitivo2:', primitivo2);
primitivo2 = 3;
console.log('primitivo1:', primitivo1, 'primitivo2:', primitivo2);

const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);