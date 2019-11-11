const pessoa = {
    nome : 'Luiz',
    nome2: 'Ricardo',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

// Atribuição via desesturuturação
const { nome = '', nome2: teste = 'Maria', sobrenome, telefone='Não existe', idade } = pessoa;
console.log(teste, nome, sobrenome, telefone); // Luiz Miranda Não existe

const {endereco: {rua: r = '', numero}, endereco} = pessoa;
console.log(r, numero, endereco); // Av. Brasil 320 { rua: 'Av. Brasil', numero: 320 }

const pessoa2 = {
    nome1 : 'Luiz',
    nome2: 'Ricardo',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

const {nome1, ...resto} = pessoa2;
console.log(nome, resto);