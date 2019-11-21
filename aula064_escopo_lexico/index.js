const nome = 'Luiz';

function falaNome(){
    console.log(nome);
}

function usaNome(){
    const nome = 'Otávio';
    falaNome();
}

usaNome(); // Luiz