// Global
// Closures e escopo da função (lugar onde foi declarada)


function retornaFuncao(nome) {
    // const nome = 'Luiz';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.dir(funcao);

console.log(funcao(), funcao2());