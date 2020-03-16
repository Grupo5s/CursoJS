function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave qdo true, exemplo for in
        value: estoque, // valor da chave
        writable: false, // o valor não pode ser alterado, ex: p1.estoque = 500000
        configurable: false // não posso reconfigurar a chave, ou, enureble, value, apagar uma variável pertecente etc...
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave qdo true, exemplo for in
            value: nome, // valor da chave
            writable: true, // o valor não pode ser alterado, ex: p1.estoque = 500000
            configurable: true // não posso reconfigurar a chave, ou, enureble, value, apagar uma variável pertecente etc...
        },
        preco: {
            enumerable: true, // mostra a chave qdo true, exemplo for in
            value: preco, // valor da chave
            writable: true, // o valor não pode ser alterado, ex: p1.estoque = 500000
            configurable: true // não posso reconfigurar a chave, ou, enureble, value, apagar uma variável pertecente etc...
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1); // Produto { nome: 'Camiseta', preco: 20, estoque: 3 }
console.log("Mostrando as chaves");
console.log(Object.keys(p1));
for(let chave in p1){
    console.log(chave);
}