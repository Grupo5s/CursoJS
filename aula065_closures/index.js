function retornaFuncao(){
    const nome = 'Luiz';
    return function(){
        return nome;
    }
}
const funcao = retornaFuncao();
console.log(funcao); // [Function] = retorna função sem nome por ser uma função anônima
console.log(funcao()); // Luiz


// Closure tem habilidade de acessar o seu corpo lexico

// *************************************

function retorna2(nome){ // passando para closure
    return function(){
        return nome;
    }
}

const funcao3 = retorna2("Luiz");
console.log(funcao3); // [Function]
console.log(funcao3()); // Luiz