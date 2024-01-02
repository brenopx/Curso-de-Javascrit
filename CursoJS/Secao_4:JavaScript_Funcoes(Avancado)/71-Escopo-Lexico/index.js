const nome = 'Luiz';

function falaNome() {
    // let nome = 'Outro Nome';
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'Mais um nome'
    falaNome();
}

usaFalaNome()