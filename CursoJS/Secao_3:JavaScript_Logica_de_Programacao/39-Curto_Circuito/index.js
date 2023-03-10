/*
&& -> false && true -> false "o valor mesmo"
|| -> true || *qualquer coisa coisa -> vai retornar "o valor verdadeiro"
FALSY VALUE
false
0
'' "" ``
null / undefined
NaN
*/
console.log('Luiz Otávio' && 0 && 'Maria');
console.log('Luiz Otávio' && true && 'Maria');
console.log('Luiz Otávio' && 0 && NaN);

function falaOi() {
    return 'Oi';
}

const vaiExecutar = false
// const vaiExecutar = true

console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Luiz' || true)

const corUsuario = 'vermelho';
// const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // Esse Valor será verdadeiro
const d = false;
const e = NaN;

console.log(a || b || c || d || e)