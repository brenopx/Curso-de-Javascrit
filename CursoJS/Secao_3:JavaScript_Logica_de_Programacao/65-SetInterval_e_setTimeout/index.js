function retornarHora(data) {
    data = new Date();

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

const hora = retornarHora()
console.log(hora)

const timer = setInterval(function() {
    console.log(retornarHora());
}, 1000)

setTimeout(function() {
    clearInterval(timer);
}, 3000)


setTimeout(function() {
    console.log('Olá mundo!!!!');
}, 5000)