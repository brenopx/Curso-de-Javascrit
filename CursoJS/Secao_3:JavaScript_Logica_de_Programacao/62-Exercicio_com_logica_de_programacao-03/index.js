/*
Escreva uma função que recebe um número e retorne o seguinte:
-Número é divisível por 3 = Fizz
-Número é divisível por 5 = Buzz
-Número Não é divisível por 3 e 5 = Retorna o próprio número
-Checar se o número é realmente um número = Retorna o valor com uma mensagem
-Use a função com números de 0 a 100
*/

function ResultFizzBuzz(value) {
    if (isNaN(value)) {
        console.log("O valor não é um número válido.");
        return (value);
    } else if (0 >= value <= 100){
        div3 =  value % 3 === 0 ? true : false 
        div5 =  value % 5 === 0 ? true : false
        return (
            div3 && div5 ? 'FizzBuzz' 
            : div3 ? 'Fizz' 
            : div5  ? 'Buzz' 
            : value
        );
    } else {
        console.log("O valor e maior que 100 ou menor que 0.");
        return (value);
    }
}
console.log(ResultFizzBuzz('value'))
console.log(ResultFizzBuzz(101))
console.log(ResultFizzBuzz(0))
console.log(ResultFizzBuzz(-1))
console.log(ResultFizzBuzz(3))
console.log(ResultFizzBuzz(5))
console.log(ResultFizzBuzz(9))
console.log(ResultFizzBuzz(10))
console.log(ResultFizzBuzz(15))
console.log(ResultFizzBuzz(7))