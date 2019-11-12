for(let i = 400; i <= 500; i += 10){
    console.log(`Linha ${i}`);
}
console.log('------------------------------------------');
for(let i = 500; i >= 400; i -= 10){
    console.log(`Linha ${i}`);
}

console.log('----------------numeros pares true ou false--------------------------');

for(let i = 0; i <=10; i++){
    const par = i % 2 === 0;
    console.log(i, par);
}
console.log('----------------numeros pares--------------------------');
for(let i = 0; i <=10; i++){
    const par = i % 2 === 0 ? ' par' : ' ímpar';
    console.log(i, par);
}
console.log('------------------array------------------------');

const frutas = ['pera', 'uva', 'maça', 'banana', 'jabuticaba'];

for(let i = 0; i < frutas.length; i++){
    console.log(`índice ${i} `, frutas[i]);
} 

