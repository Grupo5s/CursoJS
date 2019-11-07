/*
Leodário Alves Ribeiro Júnior tem 40 anos, peso 87 kg
tem 1,76 de altura e seu IMC é de 28.08626033057851
Leodário nasceu em 1979
*/
const nome = "Leodário Júnior";
const sobrenome = "Miranda";
const idade = 30;
const peso = 87;
const alturaEmM = 1.76;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`); // mais indicado
console.log(nome, 'nasceu em', anoNascimento + '.');