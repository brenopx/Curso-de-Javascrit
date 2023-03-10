/*
Entre 00 - 11 - Bom Dia
Entre 12 - 17 - Bom Tarde
Entre 18 - 23 - Bom Noite
If pode ser usado sozinho
Sempre que utilizo a palavra else, preciso de um if antes
Eu posso ter vários else ifs na checagem
Só posso ter um else na checagem
Podemos usar condições sem else if, utilizando apenas if e else
*/


const hora = 10

if (hora >= 0 && hora <= 11) {
    console.log('Bom Dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Bom Tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Bom Noite');
} else {
    console.log('Sua hora está errada !!!!!');
}

const tenhoGrana = false;

if (tenhoGrana) {
    console.log("Vamos pro Role")
} else {
    console.log("Sem Role pra nós !!!!! :(")
}