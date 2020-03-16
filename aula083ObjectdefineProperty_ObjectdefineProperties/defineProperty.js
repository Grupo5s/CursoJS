// defineProperty
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave qdo true, exemplo for in
        value: estoque, // valor da chave
        writable: false, // o valor não pode ser alterado, ex: p1.estoque = 500000
        configurable: false // não posso reconfigurar a chave, ou, enureble, value, apagar uma variável pertecente etc...
    });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1); // Produto { nome: 'Camiseta', preco: 20, estoque: 3 }
console.log("Mostrando as chaves");
console.log(Object.keys(p1));


function Produto1(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: function(){
            return estoque;
        },
        writable: true,
        configurable: true
    });
}

const p2 = new Produto1("Blusa", 60, 9);
p2.estoque = 5000;
console.log("Mostrando do produto1");
console.log(p2);
for(let chave in p2){
    console.log(chave);
}