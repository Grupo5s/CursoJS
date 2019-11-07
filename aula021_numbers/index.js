// javascript segue o padrão IEEE 754-2008
let num1 = 2.99393; // number
let num2 = 1.5; // number

console.log(num1.toString() + num2); // 21.5
console.log(num1.toString(2)); // versão binária
console.log(num1.toFixed(2)); // duas casas decimais após a vírgula
console.log(Number.isInteger(num1)); // para saber se é um número inteiro

// padrão IEEE 754-2008
let num5 = 0.7;
let num6 = 0.1;
console.log(num5 + num6); // 0.7999999999999999
num5 += num6; // teria quer ser 0.8
num5 += num6; // teria quer ser 0.9
num5 += num6; // teria quer ser 1
//num5 = num5.toFixed(2); // retornar 1.00
console.log(Number.isInteger(num5)); // false
num5 = parseFloat(num5.toFixed(2));
// além do parseFloat você pode usar também o Number
num5 = Number(num5.toFixed(2));
console.log(Number.isInteger(num5)); // true
// sem usar funções
num7 = 0.7;
num8 = 0.1;
num7 = ((num7 * 100) + (num8 * 100) / 100); // dará 0.8
num7 = ((num7 * 100) + (num8 * 100) / 100); // 0.9
num7 = ((num7 * 100) + (num8 * 100) / 100); // 1.0


let temp = num1 * "ola";
console.log(Number.isNaN(temp)); //NaN retorna true
let temp2 = num1 * "5";
console.log(Number.isNaN(temp2)); // retorna false
let temp3 = num1 + '5';
console.log(Number.isNaN(temp3)); // false 

let num3 = 4;
num3 = num3.toString();
console.log(typeof num3);

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // arredondar e aleatório entre 5 e 10
console.log(aleatorio);

console.log(Math.PI); // valor de PI
console.log(Math.pow(2, 10)); // 2 elevado a 10
console.log(2 ** 10); // também 2 elevado a 10

let raizQuadrada = 9;
console.log(raizQuadrada  ** (1/2)); // raiz quadrada ou
console.log(raizQuadrada ** 0.5); // raiz quadrada

console.log(100/0); // infinity ele traz como verdadeiro
console.log(100/0.00000000001); // quase um número infinito 10000000000000




