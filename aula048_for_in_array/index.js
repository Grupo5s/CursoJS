// for in lê os índices ou chaves do objeto
const frutas = ['pera', 'uva', 'maçã', 'limão'];
for(let indice in frutas){
    console.log(frutas[indice]);
}
//---------------------------------------------------------
const pessoa = {
    nome : "Luiz",
    sobrenome : "Otávio",
    idade :30 
};
let i = 0;
for(let chave1 in pessoa){
    console.log('Índice: ' + i++ + ' = Imprime ' + chave1, pessoa[chave1]);    
}

console.log(pessoa.nome); // Luiz
console.log(pessoa['nome']); //Luiz
const chave = 'nome';
console.log(pessoa[chave]); // Luiz
//-------------------------------------------------------------