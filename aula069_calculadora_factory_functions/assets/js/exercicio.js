function criaCalculadora(){

    return{
        // eru acesso com this.display
        display : document.querySelector(".display"),
        inicia(){

        },
/*
        cliqueBotoes(){
            // até aqui o this é da calculadora
            document.addEventListener('click', function(e){
            //a partir daqui é o this é do document caso eu não uso o bind() no final desta função    
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
            }.bind(this));
        },
*/
        cliqueBotoes(){
            document.addEventListener('click', e=> {
                const el = e.target;
                if(el.classList.contains("btn-num")){
                    this.btnParaDisplay(el.innerText);
                }
            });
        }

        btnParaDisplay(valor){
            this.display.value += valor; // concateno não somo
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
