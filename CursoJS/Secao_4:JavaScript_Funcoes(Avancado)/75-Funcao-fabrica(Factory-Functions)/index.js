// Factory function (Função Fábrica)

function criarPessoa(nome, sobrenome, peso, altura) {
    return {
        nome, 
        sobrenome,
        // fala: function(assunto) {
        //     return `${this.nome} está ${assunto} e pesa ${this.peso}`
        // },
        // Getter
        // nomeCompleto() {
        //     return `${this.nome} ${this.sobrenomeassunto}`
        // },
        fala(assunto) {
            return `${this.nome} está ${assunto} e pesa ${this.peso}`
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift();
            this.sobrenome = valor.join();
        },
        peso,
        altura,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criarPessoa('Luiz', 'Otávio', 80, 1.80);
const p2 = criarPessoa('Maria', 'Joaquina', 40, 1.60);

console.log(p1);
console.log(p1.fala('Falando sobre JS'));

console.log(p2);
console.log(p2.fala('Falando sobre JS'));

// console.log(p1.imc())
// console.log(p2.imc())

console.log(p1.imc)
console.log(p2.imc)
// console.log(p2.nomeCompleto())
p1.nomeCompleto = 'Maria Joaquina';
console.log(p1.nome);
