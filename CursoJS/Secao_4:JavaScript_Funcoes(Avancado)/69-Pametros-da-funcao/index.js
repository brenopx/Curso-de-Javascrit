// A palavras 'arguments' sustenta todos os argumentos enviados
// Ela funciona somente para função iniciadas com function

// function funcao(value) {
//     console.log('Oie', value);
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[1]);


//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total)
// }
// funcao('Valor', 1, 2, 3);

// function funcao(a, b = 2, c = 4) {
//     // b = b || 2;
//     console.log(a + b + c);
// };
// funcao(2, undefined, 30);

// function funcao({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade)
// };

// let obj = {nome: 'Luiz', sobrenome: "Otavio", idade: 20};
// funcao(obj);

function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
};

funcao(['Luiz', 'Minanda', 30])

function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50);

const novaConta = (operador, acumulador, ...numeros) => {
    // console.log(arguments);
    console.log(operador, acumulador, ...numeros);
}
novaConta('+', 0, 20, 30, 40, 50);
