const a1 = [10,20,30,40,50,60,70,80,90];
a1.forEach(function(valor, indice, array){
    console.log(valor,indice,array)
});

const a2 = [10,20,30,40,50,60,70,80,90];
a2.forEach(valor => console.log(valor));

console.log("------------soma-------------------")
const a3 = [10,20,30,40,50,60,70,80,90];
let total = 0;
a3.forEach(valor => {
    total += valor;    
});
console.log(total);
