// Função Recursiva é uma função que chama ela mesma
// E preciso se preocupar com a forma que ela vai parar
function recursiva(max) {
    if (max >= 10) return ;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);