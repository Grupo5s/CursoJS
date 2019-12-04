function criaCalculadora(){

    return{
        // eru acesso com this.display
        display : document.querySelector(".display"),
        inicia(){

        },

        cliqueBotoes(){
            // até aqui o this é da calculadora
            document.addEventListener('click', function(e){
            //a partir daqui é o this é do document    
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay();
                }
            })
        },

        btnParaDisplay(){

        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
