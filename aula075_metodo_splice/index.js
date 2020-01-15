//               0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// nomes.splice(índice, delete, elem1, elem2, elem3);
nomes.splice(4, 1); // quero remover o índice 4 um elemento
console.log(nomes); // [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]

const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos2 = nomes2.splice(4,1);

console.log(nomes2,removidos2); 
// [ 'Maria', 'João', 'Eduardo', 'Gabriel' ] [ 'Júlia' ] - o primeiro mostra os arrays menos os removidos
// o segundo mostra somente os removidos
//***************************************************************************** */

const nomes3 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos3 = nomes3.splice(3,2);
console.log(nomes3,removidos3); // [ 'Maria', 'João', 'Eduardo' ] [ 'Gabriel', 'Júlia' ]

//***************************************************************************** */
// Fazendo com nomes negativos
//                -5       -4       -3         -2        -1
const nomes4 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos4 = nomes4.splice(-1,1); // o primeiro é o índice o segundo a quantidade que quero remover
console.log(nomes4, removidos4); // [ 'Maria', 'João', 'Eduardo', 'Gabriel' ] [ 'Júlia' ]

//                -5       -4       -3         -2        -1
const nomes5 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos5 = nomes5.splice(-2,1); // índice -2 remover um elemento
console.log(nomes5, removidos5); // [ 'Maria', 'João', 'Eduardo', 'Júlia' ] [ 'Gabriel' ]

//                -5       -4       -3         -2        -1
const nomes6 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos6 = nomes6.splice(-2, Number.MAX_VALUE); // remover apartir do -2 até o final
console.log(nomes6, removidos6); // [ 'Maria', 'João', 'Eduardo' ] [ 'Gabriel', 'Júlia' ]

//***************************************************************************** */
// Adicionando elementos
//               0        1        2          3         4
const nomes7 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const adicionar7 = nomes7.splice(3,0,'Luiz'); //adiciona no índice 3
console.log(nomes7); // [ 'Maria', 'João', 'Eduardo', 'Luiz', 'Gabriel', 'Júlia' ]

/***************************************************************************** */
// Adicionando e removendo elementos
//               0        1        2          3         4
const nomes8 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const adicionar8 = nomes8.splice(3,2,'Luiz','Ana'); //removo Grabriel e Júlia e adiciono Luiz e Ana
console.log(nomes8); // [ 'Maria', 'João', 'Eduardo', 'Luiz', 'Ana' ]

/***************************************************************************** */
// Adicionando no último elemento
//                -5       -4       -3         -2        -1   
//               0        1        2          3         4 
const nomes9 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
nomes9.splice(nomes9.length, 0, 'Luiz','Otávio','Miranda'); // adicionando no final do array
console.log(nomes9); // ['Maria',   'João', 'Eduardo', 'Gabriel', 'Júlia',   'Luiz', 'Otávio',  'Miranda' ]
nomes9.splice(0,0, 'Joana', 'Sandra', 'Camila'); // Adicionando no início do array
console.log(nomes9); // ['Joana',   'Sandra', 'Camila', 'Maria',   'João', 'Eduardo', 'Gabriel', 'Júlia',   'Luiz', 'Otávio',  'Miranda' ]


