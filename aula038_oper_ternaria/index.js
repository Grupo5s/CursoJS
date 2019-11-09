const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);

const corUsuario2 = 'Pink';
const corPadrao2 = corUsuario2 || 'Preto';
console.log(corPadrao2);

