function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
               // throw new TypeError('Mensagem');
               console.log("Bad Value");
               return;
            }

            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
console.log("------------------------------");
p1.estoque = 4444444;
console.log("------------------------------");
console.log(p1.estoque);
console.log("------------------------------");
p1.estoque = 77;
console.log(p1.estoque);
console.log("------------------------------");
console.log("Colocando uma string");
p1.estoque = "teste";

console.log("------------------------------");
console.log("------------------------------");

// facture function
function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    }
}
// na facture function não preciso do new
const p2 = criaProduto('Camiseta');
console.log(p2.nome);
p2.nome = 'Outra coisa.';
console.log(p2.nome);
p2.nome = "muitas coisas ou coisa, depende ser for coisa.";
console.log(p2.nome);
