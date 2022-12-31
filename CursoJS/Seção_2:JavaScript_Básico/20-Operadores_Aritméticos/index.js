/*
* Aritméticos
* +  Adição / Concatenação (- / *)
* ** Potenciação
* %  Resto da divisão
* () => ** => * / % => +-
* Incremento = ++
* decremento = --
*/

const num1 = 10;
const num2 = 3;
const num3 = 5;
console.log(num1 ** num2);
console.log(num1 % num2);
console.log(num1 + num2 * num3);
console.log((num1 + num2) * num3);
console.log(num1 * num2 / num3);

let contador = 1;
console.log(contador++);
console.log(contador);
console.log(--contador);
console.log(contador);

const passo = 10;
contador = contador + passo;
console.log(contador);

contador += passo;
console.log(contador);

contador *= passo;
console.log(contador);

// NaN => not a number
const n1 = 10;
const n2 = 'Luiz';
const n3 = parseInt('5');
const n4 = parseFloat('5.5');
const n5 = Number('5.5');
console.log(n1 + n2);
console.log(n1 * n3);
console.log(n1 + n3);
console.log(n1 + n5);