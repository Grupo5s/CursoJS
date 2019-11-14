const paragrafos = document.querySelector(".paragrafos");
// devolve um nodelist (não é array) NodeList(4) [p, p, p, p] - é aparte da api do DOM
const ps = paragrafos.querySelectorAll('p'); // se comporta como array
console.log(ps[1]);
console.log(ps.length);

const estiloBody = getComputedStyle(document.body); // pego todos os estilos do corpo
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody);  // rgb(17, 86, 102)

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "#FFFFFF";
}
