// reduce
// muito utilizado para um array ao um único elemento
// você consegue fazer Filter, Map com reduce (não é ideal)

//Some todos o números (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valorAtual, indice, array){
    acumulador += valorAtual; // acumulador = acumulador + valorAtual
    return acumulador;
}, 0); // o valor 0 é o valor inicial do acumulador, é opcinal caso não tenha o valor inicial é o primeiro do array
console.log(total);

//Retorne um array com os pares (Filter) mais fácil usar com filter
const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pares = numeros2.reduce(function(acumulador, valorAtual, indice, array){
    if(valorAtual % 2 === 0) acumulador.push(valorAtual);
    return acumulador; 
}, []); 
console.log(pares); // retornando somente os pares

// Retorne um array com o dobro dos valores (Map) mais fácil usar com Map
const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros3.reduce(function(acumulador, valorAtual){
    acumulador.push(valorAtual * 2);
    return acumulador;
},[]);
console.log(dobro);

//Somando somente os divisíveis por 2 ou seja somente os pares
const numeros4 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const diviPares = numeros4.reduce(function(acumulador, valorAtual, indice, array){
    if(valorAtual % 2 === 0) {
        acumulador += valorAtual;     
    }
    return acumulador;    
}, 0);
console.log(diviPares);


//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: "Wallace", idade: 147}
];
const maisVelha = pessoas.reduce(function(acumulador, valorAtual){
    if(acumulador.idade > valorAtual.idade) return acumulador; // o acumulador sempre será o que tiver a maior idade
    return valorAtual;
});
console.log(maisVelha);
