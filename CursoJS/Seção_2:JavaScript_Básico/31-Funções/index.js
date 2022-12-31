function saudacao(nome) {
    return `Bom Dia ${nome}!`;
};

// saudacao('Luiz');
// saudacao('Maria');
const variavel = saudacao('Felipe');
console.log(variavel);

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
    console.log('Ola Mundo')
};

const resultado = soma(2, 2);
const resultado1 = soma('Luiz', ' Otávio');

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(2, 2));
console.log(resultado1);

// const raiz = function (n) {
//     return n ** 0.5;
// };

// const raiz = (n) => {
//     return n ** 0.5;
// };

const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(36));