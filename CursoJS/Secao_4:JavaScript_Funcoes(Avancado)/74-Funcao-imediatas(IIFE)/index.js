// IIFE -> Immdiately invoked function express
// Tem que estar dentro de parentes 
(function(idade, peso, altura) {
    const sobrenome = 'Miranda';
    function criarNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criarNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 180, 1.80);

