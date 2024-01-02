// return 
// Retorna um valor
// Terminar a função
// Funçoes pode ou não retornar valores

function soma(a, b) {
    return a + b;
}

function soma2(a, b){
    console.log(a + b);
}

soma(5, 2);

function criarPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criarPessoa('Luiz', 'Otávio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo);
console.log(olaMundo());
console.log(olaMundo("Mundo !"));

const fala = falaFrase('Olá');
const resto = fala('mundo !!!');
console.log(resto);


function duplica(n) {
    return n * 2
}

function triplica(n) {
    return n * 3
}

function quadriplica(n) {
    return n * 4
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

function criaMultiplicador(mul) {
    // multiplicador
    return function(n) {
        return n * mul
    };
};

const duplca_mul =  criaMultiplicador(2);
const triplica_mul =  criaMultiplicador(3);
const quadriplica_mul =  criaMultiplicador(4);

console.log(duplca_mul(5));
console.log(triplica_mul(5));
console.log(quadriplica_mul(5));