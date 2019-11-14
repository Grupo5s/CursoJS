const nome = "Luiz";
let i = 0;
while(i < nome.length){
    console.log(nome[i]);
    i++
}
console.log("Segue a vida");

console.log("// --------------------------------------------");

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}
console.log('*************');
let rand2 = 10;
do{
    rand2 = random(min, max);
    console.log(rand2); 
} while(rand !== 10)