/*
* Primitivos (imutáveis): string, number, 
* boolean, undefined, null(bigint, symbol) - Valores copiados
*
* Referência (mutável): array, object, function - Passados por referência
*/

let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);
a.push('Luiz');
console.log(c);

const pessoa ={ 
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
// novaPessoa = pessoa;
novaPessoa = {...pessoa};
console.log(pessoa);
console.log(novaPessoa);

pessoa.nome = 'João';
console.log(pessoa);
console.log(novaPessoa);