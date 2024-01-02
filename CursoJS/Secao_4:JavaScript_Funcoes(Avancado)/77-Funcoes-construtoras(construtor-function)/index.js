// Função construtora -> objetos
// Função fabrica -> objetos
// Contrutora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Como deixar as coisas dentro privadas
    // Atributos ou métodos privados
    const ID = 1234;
    const metodoInterno = function() {

    }

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    }
}

const P1 = new Pessoa('Luiz', 'Otávio');
const P2 = new Pessoa('Maria', 'Oliveira');

P1.metodo();
P2.metodo();

// console.log("Pessoa 1", P1)
// console.log("Pessoa 2", P2)