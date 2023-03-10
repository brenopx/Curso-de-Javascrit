// Operadores Ternários -> ? :

const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 1000) {
//     console.log("Usuario VIP");
// } else {
//     console.log("Usuario normal");
// }

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(nivelUsuario, corPadrao);
