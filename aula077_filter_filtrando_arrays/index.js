// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos 

//Retorne os números maiores que 10
//               0   1   2  3  4  5   6  7  8  9  10 11 12 
const numeros = [5, 10, 50, 9, 2, 23, 1, 3, 4, 5, 6, 7, 27 ];

function callbackFilter(valor, indice, array){
    console.log(indice,valor, array);
    return valor > 10;
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados); // [ 50, 23, 27 ]

// ***********************************************************************************
//Retorne os números maiores que 10
//                0   1   2  3  4  5   6  7  8  9  10 11 12 
const numeros2 = [5, 10, 50, 9, 2, 23, 1, 3, 4, 5, 6, 7, 27 ];

// função anônima callback arrow function
const numerosFiltrados2 = numeros2.filter(valor2 => valor2 > 10) 
console.log("------------------------");
console.log("Segundo exemplo");
console.log(numerosFiltrados2); // [ 50, 23, 27 ]

// ***********************************************************************************
console.log("------------------------");
console.log("Terceiro exemplo");
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: "Wallace", idade: 47}
];

// Filter sempre retorna um novo array
const pessoasComNomeGrande = pessoas.filter(function(valor){
    console.log(valor); 
    /*imprime
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: "Wallace", idade: 47} */
    console.log(valor.nome); // imprime só os nomes
});

// ***********************************************************************************
console.log("------------------------");
console.log("Quarto exemplo");
// Retorne as pessoas que tem o nome com 6 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas2 = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: "Wallace", idade: 47}
];

// Filter sempre retorna um novo array
/*
const pessoasComNomeGrande2 = pessoas2.filter(function(obj){
    return obj.nome.length >= 6
});
*/
const pessoasComNomeGrande2 = pessoas2.filter(obj => obj.nome.length >= 6);
console.log(pessoasComNomeGrande2); // retorna os nomes com array com letras maiores 6

// Retorne as pessoas com mais de 50 anos
const pessoasIdadeMais50 = pessoas2.filter(obj => obj.idade > 50);
console.log(pessoasIdadeMais50);

// Retorne as pessoas cujo nome termina com a
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);