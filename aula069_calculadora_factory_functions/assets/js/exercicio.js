function criaCalculadora(){

    return{
        // eu acesso com this.display
        display : document.querySelector(".display"),
        btnClear : document.querySelector(".btn-clear"),
        
        clearDisplay(){
            this.display.value = '';
        },

        inicia(){
            this.cliqueBotoes();   
            this.pressionaEnter();         
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        // EVAL É UM COMANDO MUITO PERIGOSO
        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta Inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch(e){
                alert('Conta Inválida');
                return;
            }
        },

        clearDisplay(){
            this.display.value = ' ';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
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

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn.del')){
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }                
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor; // concateno não somo
        }

        

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
