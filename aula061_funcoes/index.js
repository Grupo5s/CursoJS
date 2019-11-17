// Declaração de funcão (Function Hoisting)
falaOi();
function falaOi(){
  console.log('Oi');
}

//First class (objetos de primeira classe)
//Function expression
const souUmDado = function(){
  console.log("sou um dado");
}
souUmDado();  

function executaUmaFuncao(funcao){
  console.log('Vou executar a função abaixo');
  funcao();
}
executaUmaFuncao(souUmDado);

//Arrow function - seria uma function expression
/*
const funcaoArrow = function nomeFucao => { // não é tão usado mas funciona 
  console.log('Sou uma arrow function'); 
}
*/
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
}
funcaoArrow();
/*
setInterval(function(){
},1000);

setInterval(umaFuncao,1000);
*/
const obj = {
  falar: function(){
    console.log('estou falando');
  },
  falar2(){
    console.log('estou falando 2');
  }
}
obj.falar();
obj.falar2();

