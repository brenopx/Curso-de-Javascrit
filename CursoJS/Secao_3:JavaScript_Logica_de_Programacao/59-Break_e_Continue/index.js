// Continue continua para a próxima iteração
// Break sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o número 2')
        continue;
    }

    console.log(numero)

    if (numero === 7) {
        console.log('7 encontrado, saindo ...')
        break;
    }
}

console.log('\n')

let i = 0
while (i < numeros.length) {
    let numero = numeros[i]

    if (numero === 2) {
        console.log('Pulei o número 2');
        // Não pode esquecer de atualizar o contador
        i++;
        continue;
    }

    console.log(numero)

    if (numero === 7) {
        console.log('7 encontrado, saindo ...');
        // Não pode esquecer de atualizar o contador
        i++;
        break;
    }

    i++;
}