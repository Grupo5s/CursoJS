//Objeto Literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
const chave = 'nome';
console.log(pessoa[chave]);

// contrutor do objeto
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa.nome1 ='Leodario';
pessoa1.idade = 30;
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

console.log(pessoa, pessoa1);

// deletando o nome
delete pessoa1.nome1;
console.log("deletando o nome de do objeto pessoa1");
console.log(pessoa1);

//objetos podem contem métodos
pessoa1.falarNome = function(){
    return(`{${this.nome} está falando seu nome`);
};
pessoa1.falarNome();

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1.getDataNascimento());

for(let chave in pessoa1){
    console.log(chave);
}

// acessando os valores das chaves
for(let chave in pessoa1){
    console.log(pessoa1[chave]);
}

// Factory functions
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // sem usar get
        nomecompleto1(){
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}
const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);
console.log(p1.nomecompleto1());

// Constructor functions - Funções Construtoras
//Começa com letras maiúsculas
function Pessoa3(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
//retornando atraves da chave this
const p01 = new Pessoa3('Luiz', 'Otávio');
const p02 = new Pessoa3('Maria', 'Silva');
console.log(p01);
p01.nome = 'Outra coisa';

// para que os valores dos objetos não possam ser alterados
Object.freeze(p2); // neste caso não consigo trocar exemplo p02.nome = 'Outra Coisa'

function Pessoa4(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); // Deste modo não pode ser alterados valores, deletar, ex: p1.nome = 'Outra coisa';
}