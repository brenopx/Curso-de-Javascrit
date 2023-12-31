// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const numeros = [1, 2, 3];
// const letras = [b, c, a];
// // [a, b, c] = [1, 2, 3];
// [a, b, c] = numeros
// [a, b, c] = letras

// console.log(a, b, c)

// // ... rest, ... spread
// //               0  1  2  3  4  5  6  7  8
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // const primeiroNumero = numeros[0];
// // const [primeiroNumero, segundoNumero, ...resto] = numeros
// const [primeiroNumero, , terceiroNumero] = numeros

// // console.log(primeiroNumero, segundoNumero)
// console.log(primeiroNumero, terceiroNumero)
// // console.log(resto)

//                   0          1          2
//                0  1  2    3  4  5    6  7  8
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [, [,,sextoNumero]] = numeros

console.log(numeros[1][2]);
console.log(sextoNumero);