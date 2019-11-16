const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13];

for(let numero of numeros){

  if(numero === 2 || numero === 5){
    console.log("Pulei o dois e o cinco");
    continue;
  }  
  
  if(numero === 10){
    console.log("Parei no dez");
    break;
  }
  
  console.log(numero);



}