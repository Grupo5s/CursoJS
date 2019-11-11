const tresHoras = 60 * 60 * 3 * 1000; // em javascript milissegundos
const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
console.log(data.toString()); // Thu Jan 01 1970 00:00:00 GMT-0300 (GMT-03:00)

const data2 = new Date();
console.log(data2.toString());

const umDia = 60 * 60 * 24 * 1000;
const data3 = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
console.log(data3.toString()); // Wed Dec 31 1969 00:00:00 GMT-0300 (GMT-02:00)

const data4 = new Date(2019, 3, 12, 5, 32, 34, 555); // ano, mes, dia, horas, min, seg, milis
console.log(data4);

const data5 = new Date('2019-04-20 20:20:59'); // ou separado por T 2019-04-20T20:20:59.100
console.log(data5.toString()); // Sat Apr 20 2019 20:20:59 GMT-0300 (GMT-03:00)

const data6 = new Date();
console.log('Dia: ', data6.getDate());
console.log('Mês: ', data6.getMonth() + 1);
console.log('Ano: ', data6.getFullYear());
console.log('Hora: ', data6.getHours());
console.log('Minutos: ', data6.getMinutes());
console.log('Segundos: ', data6.getSeconds());
console.log('Milisegundos: ', data6.getMilliseconds());
console.log('Dia da semana: ', data6.getDay()); // número do dia da semana 0 - domingo | 6 - sabado

console.log(Date.now()); // em milisegundos data atual timestamp

//  função de formatação
function zeroAEsquerda(num){
  return num >= 10 ? num : `0${num}`;  
}

function formataData(minhaData){
  const dia = zeroAEsquerda(minhaData.getDate());
  const mes = zeroAEsquerda(minhaData.getMonth() + 1);
  const ano = zeroAEsquerda(minhaData.getFullYear());
  const hora = zeroAEsquerda(minhaData.getHours());
  const minuto = zeroAEsquerda(minhaData.getMinutes());
  const segundo = zeroAEsquerda(minhaData.getSeconds());
  return `${dia}/${mes}/${ano}  ${hora}:${minuto}:${segundo}`;
}

const minhaData = new Date();
const dataBrasil = formataData(minhaData);
console.log(dataBrasil);

