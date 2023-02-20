console.log("João nasceu em 1984.");
console.log("Em 2000 João conheceu Maria.");
console.log("João casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com João em 2015");
console.log('O filho de João se chame Eduardo.');

let nome = 'João';  // string
// var nome = 'João';

console.log({nome}, "nasceu em 1984.");
console.log("Em 2000", {nome}, "conheceu Maria.");
console.log({nome}, "casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com", {nome}, "em 2015");
console.log("O filho de", {nome}, "se chame Eduardo.");

let nome_1; // Declarou a variável
nome = 'Qualquer valor'; //inicializando a variável
console.log(nome_1);
nome = 'João'; //mudando o valor
console.log(nome_1);
console.log('teste');

// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
let nomeCliente = 'João';
console.log(nomeCliente);
// Não pode começar o nome de uma variável com um número
let nome1;
// Não podem conter espaços ou traços
// Utilizamos camelCase
let nome_Cliente;
let nomeCompletoDoCliente = "Luiz Otávio";
console.log(nomeCompletoDoCliente);
// Case-sensitive
let nomeCliente_1 = 'Luiz';
let nomecliente_1 = 'Otávio';
console.log("Esse e o nomeCliente_1:",nomeCliente_1);
console.log("Esse e o nomecliente_1:",nomecliente_1);
// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET.