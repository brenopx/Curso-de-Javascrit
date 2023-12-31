const frutas = ['Maça', 'Pêra', 'Uva', 'Banana', 
'Melancia', 'Tomate', 'Laranja']

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }

// For in -> lê os índices ou chaves do objeto
// for (let i in frutas) {
//     console.log(frutas[i])
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// For in -> lê os índices ou chaves do objeto
// for (let chave in pessoa) {
//     console.log(chave)
// }

for (let chave in pessoa) {
    console.log(pessoa[chave])
}