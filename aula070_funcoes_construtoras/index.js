// função construtora -> objetos - faz muita coisa automaticamente, já cria e retorna objeto 
// função fábrica -> objetos - é uma função normal, faz retornar um objeto voluntariamente
// Construtora -> temos sempre que iniciar seu nome com letra maiúscula exemplo Pessoa - acessando com o new
// funções construtoras e fábricas são como moldes

// criando função construtora
function Pessoa(nome, sobrenome){
    // essa constante só irá pertencer à classe, só vai ser usado internamente - atributos privados
    const ID = 12356;

    //método que só vai ser usado internamente
    const metodoInterno = function(){
    }

    //this - faz referencia ao objeto Pessoa que está sendo criada
    this.nome = nome; // Pessoa.nome = nome
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    }
}

// criando um molde
const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa("Maria", "Oliveira");

console.log(p1.nome);
console.log(p2.nome);
p2.metodo();

