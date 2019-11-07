const num1 = 5;
const num2 = 2;

console.log('Potenciação', num1**num2); // ** potenciação 5 elevado ao quadrado

console.log(`Resto da divisão de ${num1} e ${num2} o resultado é`,num1%num2); // módulo resto da divisão

let contador = 2;
contador **= 10;
console.log('contador elevado a 10',contador);

let num3 = 5;
let num4 = 'Leo';
console.log('Vai dar um NaN (Not a Number)', num3 * num4);

let num5 = 5;
let num6 = '10';
console.log('tipagem do num6 é:', typeof num6);
console.log('O próprio javascript resolve o problema e converte', num5 * num6);
console.log('Porém na soma ele entende que tem que juntar os dois números:', num5 + num6);

let num7 = 5;
let num8 = parseInt('10.3'); // convertendo para inteiro 10
let num9 = parseFloat('10.3'); // converto número flutuante
let num10 = Number('11.2'); // converte para 11.2
let num11 = Number('11'); // converte para 11 
console.log('tipo do num8:',typeof num8);
console.log('Agora consigo somar num7 + num8', num7 + num8);
console.log('Somando num7 + num9', num7 + num9);