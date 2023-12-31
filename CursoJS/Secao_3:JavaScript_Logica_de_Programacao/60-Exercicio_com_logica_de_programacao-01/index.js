// Escreva uma função que recebe 2 números e retorne o maior deles

function Maior(valor1, valor2) {
    return (valor1 > valor2 ? valor1 : valor2)
}

console.log(Maior(2,3))
console.log(Maior(3,2))
console.log(Maior(3,3))
console.log(Maior(4,3))
console.log(Maior(3,4))
console.log(Maior(3.1,3.2))

function max(x,y) {
    if(x > y){
        return x;
    } else {
        return y;
    }
}

function max(x,y) {
    if(x > y) return x;
    return y;
}

function max(x,y) {
    return x > y ? x : y;
}

const max2 = (x,y) => {
    return x > y ? x : y;
}

const max3 =(x,y) => x > y ? x : y;

console.log(max(10,2));
