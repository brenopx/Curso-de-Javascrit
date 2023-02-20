/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor
<= menor que ou igual a 
== igualdade (valor) **********
=== igualdade estrita (valor e tipo)
!= diferente (valor) **********
!== deferente estrito (valor e tipo)
*/
// const comparacao = 10 > 5;
const num1 = 10;
const num2 = 10;
const num3 = '10';

const comparacao = num1 === num2;
const comparacao1 = num1 === num3;
const comparacao2 = num1 != num2;
const comparacao3 = num1 !== num3;

console.log(comparacao);
console.log(comparacao1);
console.log(comparacao2);
console.log(comparacao3);