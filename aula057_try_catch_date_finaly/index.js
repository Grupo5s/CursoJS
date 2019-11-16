function retornaHora(data){
  if(data && !(data instanceof Date)){
    throw new TypeError("Esperando instância de data");
  }

  if(!data){
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try{
  const data = new Date('01-01-2010 12:45:22');
  const data2 = retornaHora(data);  
  const data4 = retornaHora();
  const data3 = retornaHora(12);
  console.log(data2); // 12:45:22  
  //console.log(data3);
  console.log(data4);
} catch(e){
  console.log("Erro");
  console.log(e);
} finally{
  console.log("finalizo aqui");
}