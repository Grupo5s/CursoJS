function Calculadora(){
    this.display = document.querySelector('.display');
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () =>{
        document.addEventListener('keyup', e => {
            if(e.keyCode !== 13) return;
            this.realizaConta();
        })
    }

    this.realizaCont = () =>{
        try{
            const conta = eval(this.display.value);

            if(!conta){
                alert("Conta inválida!");
                return;
            }

            this.display.valeu = conta;
        } catch(e){
            alert('Conta inválida!');
            return;
        }
        
    }

    this.capturaCliques = () =>{
        document.addEventListener('click', event =>{
            const elemento = event.target;
            if(elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
            if(elemento.classList.contains('btn-clear')) this.clear();
            if(elemento.classList.contains('btn-del')) this.del();
            if(elemento.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = elmento => {
        this.display.value += elemento.innerText;
        this.display.focus();
    }
    this.clear = () => this.display.value = '';    
    this.del = () => this.display.value = this.display.value.slice(0, -1);     
    
}

const calculadora = new Calculadora();
calculadora.inicia();

