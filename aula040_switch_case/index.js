const data = new Date('1987-04-21 00:00:00');
let diaDaSemana = data.getDay();
let diaSemanaTexto;

switch (diaDaSemana){
  case 0 : 
  diaSemanaTexto = 'Domingo';
  break;
  case 1 : 
  diaSemanaTexto = 'Segunda';
  break;
  case 2 : 
  diaSemanaTexto = 'Terça';
  break;
  case 3 : 
  diaSemanaTexto = 'Quarta';
  break;
  case 4 : 
  diaSemanaTexto = 'Quinta';
  break;
  case 5 : 
  diaSemanaTexto = 'Sexta';
  break;
  case 6 : 
  diaSemanaTexto = 'Sábado';  
  break;
  default:
  diaDaSemanaTexto = 'Não existe';
}

console.log(diaDaSemana, diaSemanaTexto);

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

const data2 = new Date();
const diaSemana = data2.getDay();
const diaSemanaTexto2 = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto2);
