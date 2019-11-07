const array = [1,2,3]; // no const posso acrescentar mais valores
array.push(8);
array[0] = 'Luiz';
console.log(array);

// ------------------------------------------------------------------

const pessoa = {
    nome: "Fulano",
    sobrenome: "De Tal",
    idade: 50,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi. Sua idade é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();

// ------------------------------------------------------------------

function criaPessoa (nome, sobrenome, idade){
    // retornando um objeto
    return{nome,sobrenome,idade}
}

// passo os argumentos para o parâmetro
const pessoa1 = criaPessoa("Leodário", "Júnior", 40);
const pessoa2 = criaPessoa("Camila", "Alves", 20);
console.log(pessoa1); // { nome: 'Leodário', sobrenome: 'Júnior', idade: 40 }
console.log(pessoa1.nome, pessoa2.nome);

// ------------------------------------------------------------------

