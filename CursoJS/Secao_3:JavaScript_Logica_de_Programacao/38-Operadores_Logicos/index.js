/*
* Operadores Lógicos
* && -> AND -> E -> Todas as expressoẽs precisam
* ser verdadeiras para retornar true.
* || -> OR  -> OU -> Uma as expressoẽs precisam
* ser verdadeiras para retornar true.
* !  -> NOT -> NÂO -> Negação do valor
*/
const expressaoAnd = true && true && true && true;
const expressaoOr = true || true || true || true

console.log(expressaoAnd);
console.log(expressaoOr);
console.log(!(true), !(true), !(true), !(true));
console.log(!(false), !(false), !(false), !(false));

const ususario = 'Luiz'; // form usuário digitou
const senha = '123456'; // form usuário digitou

// const vaiLogar = ususario === 'Luiz' && senha === '12345';
const vaiLogar = ususario === 'Luiz' || senha === '12345';

console.log(vaiLogar);