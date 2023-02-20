let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const valor = varA

varA = varB;
varB = varC;
varC = valor;

console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);