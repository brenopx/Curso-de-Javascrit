//            01234567  
const nome = 'Luiz Otávio'
//                0         1       2
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);
console.log(alunos[0]);

alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
alunos[alunos.length] = 'Ana';
alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Luana';

alunos.unshift('Luiza'); // adicionando no começo
alunos.unshift('Fabio');

alunos.push('Jorge'); // adicionando ao final

console.log(alunos);
console.log(alunos.length);

const removido = alunos.pop(); // removendo o ultimo elemento
console.log(removido);
console.log(alunos);

delete alunos[1]; // removendo um item
console.log(alunos);

console.log(alunos.slice(0, 2));
console.log(alunos.slice(0, -1));

console.log(typeof alunos);
console.log(alunos instanceof Array);