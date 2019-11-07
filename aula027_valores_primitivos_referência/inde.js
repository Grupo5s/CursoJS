/*
Primitivos (imutáveis) - string, number, boolean, undefined
null (bigint, symbol) - valor
Referência (mutável) - array, object, function
*/
let nome = "Luiz";
nome[0] = "R"; // não será trocado a string é imuntável
console.log(nome[0], nome); // L
 
/* ------------------------------------------------------------------ */

let a = 'A';
let b = a; 
a = 'Outra coisa';
console.log(a, b); // b continua com o valor A

// ------------------------------------------------

let c = [1,2,3];
let d = c;
let e = d;
console.log(c,d);
c.push(4); // tanto c quanto d serão afetados
console.log(c,d);
d.pop(); // tanto c quanto d serão afetados
console.log(c,d);
// ------------------------------------------------

let f = [1,2,3];
let g = [...f]; // estou copiando os valores de f para dentro de g
f.push(4);
console.log(f,g);

// ------------------------------------------------

const a1 = {
    nome : 'Luiz',
    sobrenome : 'Otávio'
 };
 const b1 = a1;
a1.nome = 'João';
console.log(b1); // { nome: 'João', sobrenome: 'Otávio' } 

// ------------------------------------------------

const a2 = {
    nome : 'Luiz',
    sobrenome : 'Otávio'
 };
 const b2 = {...a2}; // copio
a2.nome = 'João';
console.log(b2); // { nome: 'Luiz', sobrenome: 'Otávio' }

