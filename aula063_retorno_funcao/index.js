// return - retorna valor, termina a função

/*
document.addEventListener('click', function(){
  document.body.style.backgroundColor = 'red'; //quando eu clicar em qualquer lugar do documento muda a cor
});
*/
function criaPessoa(nome, sobrenome){
  // return {nome: nome, sobrenome: sobrenome} ou
  return {nome, sobrenome};
}
const p1 = criaPessoa("leodario", "junior");
const p2 = {
  pessoa: 'Fernanda',
  sobrenome: 'Oliveira'
}
console.log(p1);
console.log(p2);
console.log(typeof p1, typeof p2); // object object

console.log("*****************************************");

function falaFrase(comeco){
  function falaResto(resto){
    return(comeco + ' ' + resto);
  }
  return falaResto;
}
const fala = falaFrase('Olá');
const resto = fala(' mundo!');
console.log(resto);

console.log("*****************************************");

function criaMultiplicador(multiplicador){
  return function(n){
    return n * multiplicador;
  }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);
console.log(duplica(2));
console.log(triplica(3));
console.log(quadruplica(221));