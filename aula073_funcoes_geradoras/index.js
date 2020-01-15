function* geradora1(){
    // código qualquer
    yield 'Valor 1'; // yield parecido com return
    // código qualquer
    yield 'Valor 2';  
    // código qualquer
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next());
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());

console.log("-------------------------------------------------------");
console.log("Geradora 2");

function* geradora2(){
    // código qualquer
    yield 'Valor 1'; // yield parecido com return
    // código qualquer
    yield 'Valor 2';  
    // código qualquer
    yield 'Valor 3';
}

console.log("Usando o valor FOR");
const g2 = geradora2();
for (let valor of g2){
    console.log(valor);
}

console.log("-------------------------------------------------------");
console.log("Geradora 3");

function* geradora3(){
    let i = 0;

    // loop infinito
    while(true){
        yield i;
        i++;
    }
}

const g3 = geradora3();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

console.log("---------------------------");
console.log("Const 5");

function* geradora4(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora5(){
    yield* geradora4();
    yield 3;
    yield 4;
    yield 5;
}

const g5 = geradora5();
for(let valor of g5){
    console.log(valor)
}

console.log("---------------------------");
console.log("Const 6");

function* geradora6(){
    yield function(){
        console.log('Vim do y1');
    };
    //... condigos

    yield function() {
        console.log('Vim do y2');
    };
}

const g6 = geradora6();
const func1 = g6.next().value;
const func2 = g6.next().value;
func1();
func2();

console.log("---------------------------");
console.log("Const 7");

function* geradora7(){
    yield function(){
        console.log('vim so y1');
    }

    return function(){
        console.log('Vim do return');
    }
    // quando usamos return não continua o código
    // daqui para baixo não roda

    yield function(){
        console.log('vim do y2');
    }

}

const g7 = geradora7();
const func3 = g7.next().value;
const func4 = g7.next().value;
const func5 = g7.next().value; // dará erro
func3();
func4();
func5(); // dará erro
