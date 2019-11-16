function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC' // ele zera timezone considera que é 01/01/1970
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
      clearInterval(timer); // limpo o timer para não criar um timer em cima de outro
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0; // zero o segundos para não continuar onde parou
    }

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer); // limpo o timer para não criar um timer em cima de outro
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer); // limpo o timer para não criar um timer em cima de outro
      relogio.classList.add('pausado');
    }
  });
}
relogio();
