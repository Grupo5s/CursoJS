// ctrl alt m = para de executar o código
function mostraHora(){
  let data = new Date();

  return data.toLocaleTimeString('pt-br', {
    hour12: false
  });  
}

const timer = setInterval(function(){
  console.log(mostraHora());
}, 1000);

setTimeout(function(){
  clearInterval(timer);
}, 3000);

setTimeout(function(){
  console.log("5 segundos");;
}, 5000);