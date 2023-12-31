// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Obects/Date

import { formataData } from "./data.mjs";

// const data = new Date(0); // 00:00:00 01/01/1970 Timestamp unix ou época unix
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;

const data = new Date();

const newData = new Date(umDia);

console.log(data)

console.log(data.toString())

console.log(newData)

console.log(newData.toString())

const dataAtual = new Date(2019, 3, 20, 15, 14, 27); // 15:14:27 20/04/2019
// O mes de janeiro e o zero (0), então todos os mes tem o numero menos 1
// Para usar uma data, e preciso passar os dois primeiros parametros
// Ano, Mês, Dia, Hora, Minuto, Segundo, Milésimo de Segundo

// const dataString = new Date('2019-04-20 15:14:27')
const dataString = new Date('2019-04-20T15:14:27.500')
console.log('Dia: ', data.getDate());
console.log('Mês no JS: ', data.getMonth());
console.log('Mês Real: ', data.getMonth());
console.log('Ano: ', data.getFullYear());
console.log('Hora: ', data.getHours());
console.log('Min: ', data.getMinutes());
console.log('Seg: ', data.getSeconds());
console.log('ms: ', data.getMilliseconds());
console.log('Dia Semena: ', data.getDay());// 0 - Domingo, 6 - Sabado

console.log(dataString.toString())

const dataBrasil = formataData(data)
console.log(dataBrasil)