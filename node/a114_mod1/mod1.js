const nome = 'Luiz';
const sobrenome = 'Miranda';
const falaNome = () => nome + ' ' + sobrenome;


// console.log(module);
// exportando nome
/* module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome; */
//console.log(module.exports);
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

//this aponta para exports e module.exports
this.qualquerCoisa = "O que eu quiser exportar";
//console.log(exports);
