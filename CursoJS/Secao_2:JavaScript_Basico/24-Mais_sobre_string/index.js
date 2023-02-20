let umaString = 'Um \'texto\'';

umaString = 'Um \\texto';
console.log(umaString)

//                01234567
let novaString = "Um texto";

console.log(novaString[5]);
console.log(novaString.charAt(5));
console.log(novaString.charAt(8));

console.log(novaString.concat(' ', 'em', ' ', 'um', ' ', 'lindo', ' ', 'dia'));
console.log(novaString + ' em um lindo dia');
console.log(`${novaString} em um lindo dia`);

console.log(novaString.indexOf('texto'));
console.log(novaString.indexOf('Texto'));
console.log(novaString.indexOf('Um', 3));
console.log(novaString.indexOf('o', 3));

console.log(novaString.lastIndexOf('o'));
console.log(novaString.lastIndexOf('o', 3));

console.log(novaString.match(/[a-z]/g));
console.log(novaString.match(/[a-z]/));
console.log(novaString.search(/[a-z]/));
console.log(novaString.search(/x/));
console.log(novaString.replace(/Um/, 'Outra'));


let outraString = "O rato roeu a roupa do rei de roma.";

console.log(outraString.replace(/r/, '#'));
console.log(outraString.replace(/r/g, '#'));

console.log(outraString.length);

console.log(outraString.slice(2, 6));
console.log(outraString.slice(-5));
console.log(outraString.slice(30));
console.log(outraString.slice(-5, -1));
console.log(outraString.substring(outraString.length - 5, outraString.length - 1));

console.log(outraString.split(' '));
console.log(outraString.split('r', 2));

console.log(outraString.toUpperCase());
console.log(outraString.toLowerCase());