const nome = "Luiz Otávio";
console.log(nome[0]);

const alunos = ["Luiz", "Maria", "João"];
alunos[0] = "Eduardo";
alunos[3] = "Luiza";
console.log(alunos[0]);
console.log(alunos[1]);

//array é considerado objeto no javascript a difierença do objeto no array é indexado automaticamente
console.log(`Tipo é: ${typeof alunos}`);
console.log(`Também é array ${alunos instanceof Array}`); // true

// caso eu queira colocar na última posição
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fernanda';
alunos[alunos.length] = 'Camila';
// ou posso fazer assim também coloca na última posição automaticamente
alunos.push('Sandra');
alunos.push('Jéssica');
alunos.push('Samira');
alunos.push('Raissa');

// acessar determinada quantidade de arrays
console.log(`Acessando array do 2 e 4 ${alunos.slice(2-4)}`);
console.log(`Acessando array do 1 até 4 ${alunos.slice(1,4)}`);

// para colocar no começo
alunos.unshift('Maria');
alunos.unshift('Sabrina');

alunos.pop(); // removo o último do array
// para verificar o último que foi removido posso fazer assim
const removido = alunos.pop();
console.log(`Foi removido: ${removido}`);
console.log(alunos);

//para remover no começo
alunos.shift();
const removido2 = alunos.shift();
console.log(`Foi removido: ${removido2}`);
console.log(alunos);

// javascript tem valor padrão para as coisas que não existem undefined
console.log(alunos[90]); // undefined

delete alunos[1]; // fica um elemento vazio no array

