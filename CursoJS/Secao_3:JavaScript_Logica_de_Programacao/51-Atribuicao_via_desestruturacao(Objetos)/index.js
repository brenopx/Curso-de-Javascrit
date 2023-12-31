const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome: teste = '', sobrenome, ...resto } = pessoa
console.log(teste, sobrenome)

const {endereco: {rua, numero}} = pessoa

console.log(rua, numero)

console.log(resto)