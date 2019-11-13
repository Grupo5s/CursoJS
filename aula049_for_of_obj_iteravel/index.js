const nome = "Leodário Júnior";
for(let valor of nome){
    console.log(valor); // pega cada pedacinho da letra
}
//-------------------------------------------------------
const nomes = ['Leodário', 'Carlos', 'Ricardo', 'João'];
for(let valor of nomes){
    console.log(valor); // Leodário Carlos  Ricardo  João
}

// diferença com o for in
// a vantagem é que o for in retorna o índice
for(let valor in nomes){
    console.log('For in com índice: ' + valor, nomes[valor]);
}
// ----------------------------------------------------------

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});