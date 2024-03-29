// const data = new Date();
// const h1 = document.querySelector('.content h1');

// // h1.innerHTML = "Funcionou ?"

// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto = '';
//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-Feria';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-Feria';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-Feria';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-Feria';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-Feria';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sabado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = '';
//             return diaSemanaTexto;
//     }
// }

// function getNomeMes(numeroMes) {
//     let nomeMes = ''

//     switch (numeroMes) {
//         case 0:
//             nomeMes = 'Janeiro'
//             return nomeMes;
//         case 1:
//             nomeMes = 'Fereveiro'
//             return nomeMes;
//         case 2:
//             nomeMes = 'Março'
//             return nomeMes;
//         case 3:
//             nomeMes = 'Abril'
//             return nomeMes;
//         case 4:
//             nomeMes = 'Maio'
//             return nomeMes;
//         case 5:
//             nomeMes = 'Julho'
//             return nomeMes;
//         case 6:
//             nomeMes = 'Junho'
//             return nomeMes;
//         case 7:
//             nomeMes = 'Agosto'
//             return nomeMes;
//         case 8:
//             nomeMes = 'Setembro'
//             return nomeMes;
//         case 9:
//             nomeMes = 'Outrubro'
//             return nomeMes;
//         case 10:
//             nomeMes = 'Novembro'
//             return nomeMes;
//         case 11:
//             nomeMes = 'Dezembro'
//             return nomeMes;
//     }
// }

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function getDiaSemanaTexto(diaSemana) {
//     const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta',
//         'Quinta', 'Sexta', 'Sábado'];
//     return diasSemana[diaSemana];
// }

// function getNomeMes(numeroMes) {
//     const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
//         'Maio', 'Junho', 'Junho', 'Agosto', 'Setembro', 'Outubro',
//         'Novembro', 'Dezembro'];
//     return meses[numeroMes];
// }

// function criarData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes)

//     return (
//         `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
//         `de ${data.getFullYear()} ` +
//         `${zeroAEsquerda(data.getHours())}:` +
//         `${zeroAEsquerda(data.getMinutes())}`
//     )
// }

// h1.innerHTML = criarData(data)

const data = new Date();
const h1 = document.querySelector('.content h1');

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}

h1.innerHTML = data.toLocaleString('pt-BR', opcoes)
// h1.innerHTML = data.toLocaleString(
//     'pt-BR',
//     {dateStyle: 'full', timeStyle: 'full'}
// )
// h1.innerHTML = data.toLocaleString(
//     'pt-BR', 
//     {dateStyle: 'full', timeStyle: 'short'}
// )
