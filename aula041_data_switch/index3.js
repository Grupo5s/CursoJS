const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanaTexto(umDia){
  const diaDaSemanaTexto = ['domingo','segunda', 'terça', 'quarta', 'quinta', 
  'sexta', 'sábado'
];
  return diaDaSemanaTexto[umDia];

}

function getNomeMes(numeroMes){
  const diaMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];
  return diaMes[numeroMes];
}
function zeroAEsquerda(num){
  return num  >= 10 ? num : `0${num}`;
}

function criaData(data){
 const diaSemana = data.getDay();
 const numeroMes = data.getMonth();

 const nomeDia = getDiaSemanaTexto(diaSemana);
 const nomeMes = getNomeMes(numeroMes);
 
 return (
  `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
  `de ${data.getFullYear()} `+ 
  `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
 );
}


h1.innerHTML = criaData(data);