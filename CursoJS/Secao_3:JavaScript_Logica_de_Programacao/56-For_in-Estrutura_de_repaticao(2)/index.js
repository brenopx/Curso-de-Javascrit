const nome = 'Luiz Otávio';
const nomes = ['Luiz Otávio', 'Henrique', 'Otávio'];

// for (let i = 0; i < nome.length; i ++) {
//     console.log(nome[i])
// }

// for (let i in nome) {
//     console.log(nome[i])
// }

// for (let valor of nome) {
//     console.log(valor)
// } 

// for (let valor of nomes) {
//     console.log(valor)
// }

nomes.forEach((el, indice, arr) => {
    console.log(el, indice, arr)
})

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Não funciona
// for (let valor of pessoa) {
//     console.log(valor)
// } 

// For Clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chaves (string, array ou objetos)
// For of = Retorna o valor em si (iteráveis, arrays ou strings)