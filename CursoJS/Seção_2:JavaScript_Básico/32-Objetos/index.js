const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
// array = 'Outro valor'
console.log(array);

const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 55
// };

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// };

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
};

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoa1.nome);
console.log(pessoa2.nome);

const novaPessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi ...`);
    },

    incrementaIdade() {
        this.idade++;
    },

    falaSobreIdade() {
        console.log(`A minha idade atual é ${this.idade}.`);
    }
};

novaPessoa.fala();
novaPessoa.falaSobreIdade();
novaPessoa.incrementaIdade();
novaPessoa.falaSobreIdade();