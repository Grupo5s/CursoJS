let a = 'A';
let b = 'B';
let c = 'C';
const numeros = [1,2,3];
[a,b,c] = numeros;
console.log(a,b,c); // 1 2 3

const num = [300, 55, 3, 4, 15, 77, 47, 8, 9];
const primeiroNumero = num[0];
console.log(primeiroNumero);
const [prim, segun] = num;
console.log(prim, segun); // 300 55

//quando quero pegar o restante do array chamamos de rest operator, quando queremos espalhar chamamos spread operator
const [primeiro, segundo, ...resto] = num; //rest operator
console.log(resto); // [3, 4, 15, 77, 47, 8,  9 ]
const [...qualquercois] = num;
console.log(qualquercois);

//quando quiser pular alguns valores
const [Um, , Três, , Cinco, , Sete] = num;
console.log(Um, Três, Cinco, Sete); //300 3 15 47

//    índices =     0        1        2
//                0,1,2    0,1,2    0,1,2 
const maisNum = [[1,2,3], [4,5,6], [7,8,9]];
console.log(maisNum[1][2]); // 6
const [,[,,seis]] = maisNum; // 6
const [lista1, lista2, lista3] = maisNum;
console.log(lista3); // [ 7, 8, 9 ]
console.log(lista3[2]); // 9

