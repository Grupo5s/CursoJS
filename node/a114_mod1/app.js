// importanto somente uma chave
//const falaNome = require('./mod1').falaNome;
const mod1 = require('./mod1');
// console.log(mod1.falaNome());

const falaNome = mod1.falaNome;
console.log(falaNome());