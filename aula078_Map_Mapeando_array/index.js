// Map altera os arrays originais
// é parecido com filter porém o valor original é alterado
// Map sempre terá o tamanho do array original

//               0   1   2  3  4  5   6  7  8  9  10 11 12 
const numeros = [5, 10, 50, 9, 2, 23, 1, 3, 4, 5, 6, 7, 27 ];
/*
const numerosEmDobro = numeros.map(function(valor){
    // console.log(valor, indice, array);
    // no filter retornava verdadeiro ou falso
    // agora dobrar números

    //exemplo 1 exporádico    
    //return `Luiz -> ${valor}`;
  
});
*/

/* exemplo 1 exporádico      
console.log(numerosEmDobro);
[
  'Luiz -> 5',  'Luiz -> 10',
  'Luiz -> 50', 'Luiz -> 9',
  'Luiz -> 2',  'Luiz -> 23',
  'Luiz -> 1',  'Luiz -> 3',
  'Luiz -> 4',  'Luiz -> 5',
  'Luiz -> 6',  'Luiz -> 7',
  'Luiz -> 27'
    ]
*/

//dobrando os números
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro); // retorna os valores em dobro

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: "Wallace", idade: 47}
];

// caso eu não queira mexer no objeto original
const comIds2 = pessoas.map(function(obj, indice){
    const newObj = { ...obj};
    newObj.id = indice;
    return newObj;
});
console.log("Novo índice sem alterar o original");
console.log(comIds2);
console.log("------------------------------------------");

const nomes = pessoas.map(obj => obj.nome);
console.log("Retornando só com os nomes:");
console.log(nomes);

// Remova apenas a chave "nome" do objeto
const idades = pessoas.map(obj =>{
    delete obj.nome;
    return obj;
});
console.log(idades); // ou
const idades2 = pessoas.map(obj =>({idade: obj.idade}));
console.log(idades2);

// Adicione uma chave de id em cada objeto
// usando o índice com id
console.log("Alterando o original");
const comIds = pessoas.map(function(obj, indice){
    obj.id = indice;
    return obj;
});
console.log(comIds);

