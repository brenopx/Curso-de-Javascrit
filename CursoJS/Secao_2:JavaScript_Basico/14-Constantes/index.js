// Não podemos criar Constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma Constantes com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST
const nome = 'João';
const sobrenome = 'Otávio';
console.log(nome);

// Operadores Aritméticos: + - * / %
// String = Text | Number = Número
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero);
console.log(typeof(primeiroNumero + segundoNumero));
console.log(nome + ' / ' + sobrenome);