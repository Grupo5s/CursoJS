class Pessoa{
   constructor(nome){
       this.nome = nome;
   } 
}

const nome = 'Luiz';
const sobrenome = 'Miranda';

// não funciona usando sem utilizar o module 
module.exports = {
    nome, sobrenome, Pessoa
};

