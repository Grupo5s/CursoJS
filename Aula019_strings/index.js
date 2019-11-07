let umaString = "Um texto";
// imprime e, e caso eu tente imprimir com um número acima da qtd de letras ou negativo dá undefined
console.log(umaString[4]); // imprime e
console.log(umaString.charAt[4]); // imprime e, nº acima ou negativo dará vazio
console.log(umaString.charCodeAt[4]); // devolve charcode da tabela asc
console.log(umaString.concat(' em', ' ', 'um', ' ', 'lindo dia')); //acrescenta texto Um texto em um lindo dia
console.log(umaString + ' em um lindo dia');
console.log(umaString.indexOf('Um')); // 0 retorna a posição do índice, caso não tenha retrona -1
console.log(umaString.indexOf('o', 3)); // procure a letra o a partir do índice 3
console.log(umaString.lastIndexOf('m',3))// começa do final 3 para trás
console.log(umaString.match(/[a-z]/g)); // irá buscar todas as letras minúsculas [ 'm', 't', 'e', 'x', 't', 'o' ]
console.log(umaString.match(/[a-z]/)); // [ 'm', index: 1, input: 'Um texto', groups: undefined ]
console.log(umaString.search(/[x]/)); // retorna o índice ele aceita expressão regular
console.log(umaString.replace('Um', 'Outra')); // estou substituindo 
console.log(umaString.replace(/Um/, 'Outra')); // com expressão regular

let texto = "O rato roeu a roupa do rei e da rainha";
console.log(texto.replace(/r/, '#')); // só substitui o primeiro que achar
console.log(texto.replace(/r/g, '#')); // com a flag g substitui tudo
console.log(texto.length); // quantidade de caracteres 38 caracteres
console.log(texto.length - 3); // 35 caracteres 
console.log(texto.slice(2, 5)); // fatio o texto rat
console.log(texto.slice(-5)); // ainha
console.log(texto.slice(-5, -1)); // ainh
console.log(texto.substring(texto.length - 5, texto.length - 1)); // ainha
console.log(texto.split(' ')); // devolve array['O','rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'e', 'da', 'rainha'   ]
console.log(texto.split('r')); // retira todos os r em array
console.log(texto.split(' ', 2)); // quero que só aconteça duas vezes [ 'O', 'rato' ]
console.log(texto.toUpperCase()); // tudo maiúsculo
console.log(texto.toLocaleLowerCase()); // minúsculo

// estudar o script afundo nos seguintes links
// https://www.w3schools.com/js/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript



