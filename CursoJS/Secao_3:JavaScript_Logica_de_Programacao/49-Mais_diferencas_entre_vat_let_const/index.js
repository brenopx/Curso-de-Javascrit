const verdadeira = true

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função 

let nome = 'Luiz'; //Criando uma nova
var nome2 = 'Luiz'; //Criando uma nova

// var nome2 = 'Otávio'; // Redeclarada

console.log(nome, nome2)

if (verdadeira) {
    let nome = 'Otávio'; //Criando uma nova
    var nome2 = 'Otávio'; // Redeclarada
    console.log(nome, nome2)

    if (verdadeira) {
        let nome = 'Outro nome'; //Criando uma nova
        var nome2 = 'Otávio'; // Redeclarada
        console.log(nome, nome2)
    }
}

console.log(nome, nome2)

var sobrenome = "Miranda";

function falaOi() {
    // var sobrenome = 'Pereira';
    // console.log(sobrenome)

    if (verdadeira) {
        let nomeIf = 'Luiz';
        console.log(sobrenome)
    }
    // console.log(nomeIf)
}

falaOi()
console.log(sobrenome)


console.log(newVar);

var newVar = "Miranda"

// console.log(newLet);

// let newLet = "Miranda"