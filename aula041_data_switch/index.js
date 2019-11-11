const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanaTexto(umDia){
  let diaDaSemanaTexto;
  switch (umDia){
    case 0 : 
    diaDaSemanaTexto = 'Domingo';
    return diaDaSemanaTexto;
    case 1 : 
    diaDaSemanaTexto = 'Segunda';
    return diaDaSemanaTexto;
    case 2 : 
    diaDaSemanaTexto = 'Terça';
    return diaDaSemanaTexto;
    case 3 : 
    diaDaSemanaTexto = 'Quarta';
    return diaDaSemanaTexto;
    case 4 : 
    diaDaSemanaTexto = 'Quinta';
    return diaDaSemanaTexto;
    case 5 : 
    diaDaSemanaTexto = 'Sexta';
    return diaDaSemanaTexto;
    case 6 : 
    diaDaSemanaTexto = 'Sábado';  
    return diaDaSemanaTexto;
    default:
      diaDaSemanaTexto = 'Não existe';
    return diaDaSemanaTexto;
  }

}

function getNomeMes(numeroMes){
  let diaMes;
  switch (numeroMes){
    case 0:
      diaMes = 'janeiro';
      return diaMes
    case 1:
      diaMes = 'fevereiro';
      return diaMes
    case 2:
      diaMes = 'março';
      return diaMes  
    case 3:
      diaMes = 'abril';
      return diaMes
    case 4:
      diaMes = 'maio';
      return diaMes
    case 5:
      diaMes = 'junho';
      return diaMes 
    case 6:
      diaMes = 'julho';
      return diaMes
    case 7:
      diaMes= 'agosto';
      return diaMes
    case 8:
      diaMes= 'setembro';
      return diaDaSemanaTexto  
    case 9:
      diaMes = 'outubro';
      return diaMes
    case 10:
      diaMes = 'novembro';
      return diaMes
    case 11:
      diaMes = 'dezembro';
      return diaMes                  
  }
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