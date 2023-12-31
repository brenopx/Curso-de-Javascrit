function relogio() {
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function criaHoraDosSegundos(segundos) {
        relogio.classList.remove('pausado')
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR',
        {
            hour12:false,
            timeZone: 'UTC'
        })
    }

    function iniciarRelogio() {
        timer = setInterval(function() {
            segundos++    
            hora = criaHoraDosSegundos(segundos);
            relogio.innerHTML = hora;
            // relogio.style.color = '#000'
        }, 1000)
    }

    // iniciar.addEventListener('click', function(event) {
    //     clearInterval(timer);
    //     iniciarRelogio() 
    // })

    // pausar.addEventListener('click', function(event) {
    //     clearInterval(timer);
    //     relogio.classList.add('pausado')
    //     // relogio.style.color = '#f00'
    // })

    // zerar.addEventListener('click', function(event) {
    //     clearInterval(timer);
    //     segundos = 0
    //     hora = criaHoraDosSegundos(segundos);
    //     relogio.innerHTML = hora;
    // })


    document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciarRelogio() 
        } else if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado')
        } else if (el.classList.contains('zerar')) {
            clearInterval(timer);
            segundos = 0
            hora = criaHoraDosSegundos(segundos);
            relogio.innerHTML = hora;
        } else {
            return
        }
    })
}
relogio()