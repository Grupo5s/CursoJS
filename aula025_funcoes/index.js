function saudacao(nome){
    console.log(`Olá ${nome}! Tudo bem?`);
}
saudacao("Fernanda"); // Olá Fernanda! Tudo bem?
saudacao("Sabrina");  // Olá Sabrina! Tudo bem?

const nome = saudacao('Luiz'); // Se eu não coloco RETURN dá um valor undefined
console.log(nome); // Se eu não coloco RETURN dá um valor undefined
// -----------------------------------------------------------------------------------
function saudacao2(nome){
    console.log(`Olá ${nome}! Tudo bem?`);
    return 123456; // tudo abaixo de return não é executado
}
const nome2 = saudacao2('Fernanda');
console.log(nome2); // 123456

// ------------------------------------------------------------------------------------

function saudacao3(nome){
    return `Olá ${nome}! Tudo bem?`;
}
const nome3 = saudacao3('Carolina');
console.log(nome3);

// ------------------------------------------------------------------------------------

function soma(x,y){
    const resultado = x + y;
    console.log("Veja o resutlado");
    return resultado; // tudo abaixo de return não é executado
    console.log("Isso não será executado");
}
console.log(soma(5,56));
console.log(soma(2,8));
console.log(soma(3,4));

// ------------------------------------------------------------------------------------

function soma(x = 1,y = 2){
    const resultado = x + y;     
    return resultado; // tudo abaixo de return não é executado    
}
console.log('Com valores padrões');
console.log(soma(3))
console.log(soma());
console.log(soma(4,4));

// ------------------------------------------------------------------------------------
console.log("variável recebendo função")
const raiz = function(n){
    return n ** 5; 
};
console.log(raiz(9));
// ------------------------------------------------------------------------------------
console.log("Arrow function");
const raiz2 = (n) =>{
    return n ** 2;
}
console.log(raiz2(2));
// ------------------------------------------------------------------------------------
console.log("Arrow function");
const raiz3 = n => n **  2;
console.log(raiz3(3));
// ------------------------------------------------------------------------------------