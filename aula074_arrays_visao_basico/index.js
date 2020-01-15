// valor por referência
const nomes = ['Eduardo', 'Maria', 'Joana'];
console.log(nomes.length);
const novo = [...nomes]; // spread operator - dessa forma const novo = nomes deletaria nos dois

novo.pop(); // deletando o último valor do array
console.log(nomes); // [ 'Eduardo', 'Maria', 'Joana' ]
console.log(novo); //  [ 'Eduardo', 'Maria' ]

const removido = novo.pop();
console.log(novo, removido); // [ 'Eduardo' ] Maria - mostra o array atual e o que foi removido

// ------------------------------

const nomes2 = ['Leodario', 'Flávia', 'Ana'];
const removido2 = nomes2.shift(); // remove o primeiro
console.log(nomes2, removido2); // [ 'Flávia', 'Ana' ] Leodario

// ------------------------------

const nomes3 = ["Carlos", "Maria", "Silvia"];
const adiciona3 = nomes3.push("Ricardo");
console.log(nomes3,adiciona3); // [ 'Carlos', 'Maria', 'Silvia', 'Ricardo' ] 4
nomes3.push('Fernanda');
console.log(nomes3);
nomes3.unshift('João'); // adiciona na primeira posição do array
console.log(nomes3); // [ 'João', 'Carlos', 'Maria', 'Silvia', 'Ricardo', 'Fernanda' ]
nomes3.unshift('Wallace');
console.log(nomes3);//['Wallace', 'João', 'Carlos', 'Maria', 'Silvia', 'Ricardo', 'Fernanda' ]

// ------------------------------
// Fatiando o array

const nomes4 = ['Juca','Wallace', 'João', 'Carlos', 'Maria', 'Silvia', 'Ricardo', 'Fernanda' ];
const novo4 = nomes4.slice(1,3); // [ 'Wallace', 'João' ] - do primeiro ao terceiro
console.log(novo4); // [ 'Wallace', 'João' ] - do primeiro ao terceiro
novo5 = nomes4.slice(0,-1); // o último é removido
console.log(novo5); // ['Juca','Wallace', 'João', 'Carlos', 'Maria', 'Silvia', 'Ricardo'] - o último foi removido

// ------------------------------------------
// convertendo uma string em uma array

const znome = 'Leodário Alves Ribeiro Júnior';
const znomes = znome.split(' '); // transformo em array
console.log(znomes); // [ 'Leodário', 'Alves', 'Ribeiro', 'Júnior' ]
const xnome = 'Leodário, Alves, Ribeiro, Júnior';
const xnomes = xnome.split(', '); // vírgula e espaço quando tiver espaço
console.log(xnomes); // [ 'Leodário', 'Alves', 'Ribeiro', 'Júnior' ]




