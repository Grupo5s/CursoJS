// arguments que sustenta todos os argumentos enviados
function funcao(){
  console.log(arguments[2]);
  console.log(arguments[1]);
  console.log(arguments);
}
funcao('casa',13,'vida','salada',29);

console.log('* **************************************************************** *');

function soma(){
  let total = 0;
  for(let argumento of arguments){
    total += argumento;
  }
  console.log(total);
}
soma(1,2,3,4,5,6,7);

// mesmo passando paramentos para função ainda continua funcionando
function soma2(a,b,c){
  let total = 0;
  for(let argumento of arguments){
    total += argumento;
  }
  console.log(total);
  console.log(total, a,b,c)
}
soma2(1,2,3,4,5,6,7);

console.log('* **************************************************************** *');

function somaValores(a, b=2, c=5){
  console.log(a+b+c);
}
//caso eu queira pular o b e dar o valor somente de A e C
somaValores(6, undefined, 9); // 17

console.log('* **************************************************************** *');

// Desestruturação
function destr({nome, sobrenome, idade}){
  console.log(nome, sobrenome, idade);
}
destr({nome: 'Leo', sobrenome: 'Júnior', idade: 20});
let dados = ({nome: 'Leo', sobrenome: 'Júnior', idade: 20});
destr(dados);

function destruturacaoArray([a,b,c]){
  console.log(a,b,c);
}
destruturacaoArray(['Leodário','E-commerce', 'Programação']);

console.log('* **************************************************************** *');

console.log('Rest operator, ele deve ser sempre o último parâmetro');
function conta(operador, acumulador, ...numeros){
  for(let numero of numeros){
    if(operador === '+') acumulador += numero;
    if(operador === '-') acumulador -= numero;
    if(operador === '*') acumulador *= numero;
    if(operador === '/') acumulador /= numero;
  }
  console.log(acumulador);
}
conta('+', 1, 10,20,30,40);

const conta2 = function(operador, acumulador, ...numeros){
  for(let numero of numeros){
    if(operador === '+') acumulador += numero;
    if(operador === '-') acumulador -= numero;
    if(operador === '*') acumulador *= numero;
    if(operador === '/') acumulador /= numero;
  }
  console.log(acumulador);
}
conta('+', 1, 10,20,30,40);
conta2('+', 1, 10,20,30,40);

const conta3 = function(operador, acumulador, ...numeros){
  console.log(arguments);
}
conta3('+', 1, 10,20,30,40); // [Arguments] { '0': '+', '1': 1, '2': 10, '3': 20, '4': 30, '5': 40 }

console.log('* **************************************************************** *');
// no arrow function não existe arguments
// veja o que dá para fazer
const flechaArg = function(...args){
  console.log(args);
}
flechaArg('+', 1, 10,20,30,40); // [ '+', 1, 10, 20, 30, 40 ]
