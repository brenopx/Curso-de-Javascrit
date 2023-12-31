// try {
//     console.log('Abrir um arquivo');
//     console.log('Manipulie o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch(e) {
//     console.log('Tratando o error');
// } finally {
//     console.log('Sempre sou executado');
// }


function retornarHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString(
        'pt-BR', 
        {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }
    )
}

// const hora = retornarHora(new Date('01-01-1970 12:58:12'))
// retornarHora('data')
// console.log(hora)

try {
    const data = new Date('01-01-1970 00:00:00');
    const hora = retornarHora(data);  
    // const hora = retornarHora();
    console.log(hora);
} catch(e) {
    // tratar o erro
} finally {
    console.log("Bom dia");
}