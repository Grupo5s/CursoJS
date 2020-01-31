// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

//               0   1   2  3  4  5   6  7  8  9  10 11 12 
const numeros = [5, 10, 50, 9, 2, 23, 1, 3, 4, 5, 6, 7, 27 ];
const numerosPares = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor * 2; // retorna o dobro dos números pares
}).reduce(function(acumulador, valor){
    return acumulador + valor; // retorna a soma do dobro de todos os pares
});
console.log(numerosPares);


// com arrow functions
//               0   1   2  3  4  5   6  7  8  9  10 11 12 
const numeros = [5, 10, 50, 9, 2, 23, 1, 3, 4, 5, 6, 7, 27 ];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor =>valor * 2) // retorna o dobro dos números pares
.reduce((acumulador, valor) => acumulador + valor); 
// retorna a soma do dobro de todos os pares
console.log(numerosPares);