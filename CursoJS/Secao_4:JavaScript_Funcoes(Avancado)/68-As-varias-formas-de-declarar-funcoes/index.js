// Declaração de função (Function hoisting)
falaoi();
function falaoi() {
    console.log('Oie');
}

// First-class objectos (Objetos de primeira classes)
// Function expression

const souUmDados = function() {
    console.log('Sou um dados');
};
souUmDados();

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando ...');
    }
};
obj.falar()

