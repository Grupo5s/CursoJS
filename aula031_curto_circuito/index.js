console.log('Luiz' && 0 && 'Maria'); //0 ele para no false 0
console.log('Luiz' && 1 && 'Maria'); // Maria pois todos são verdadeiros

/*
valores falsos:
FALSY
false
0 
'' "" ``
null / undefined
NaN
*/
console.log('Luiz' && NaN && 'Maria'); // NaN

const vaiExecutar = false;
function falaOi(){
    return 'Oi';
}
console.log(vaiExecutar && falaOi()); //false

console.log(0 || '' || 'Leo' || true); // Leo - ele retorna o primeiro true que encontrar

//********************************************************* */

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); // preto

const corUsuario1 = 'Vermelho';
const corPadrao1 = corUsuario1 || 'preto';
console.log(corPadrao1); // Vermelho

const a = 0;
const b = false;
const c = NaN;
console.log(a || b || c); // NaN todos são falsos então pega o último