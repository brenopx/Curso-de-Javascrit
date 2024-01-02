function criarCalculadora() {
  return {
    display: document.querySelector('.display'),
    btnclear: document.querySelector('.btn-clear'),
    clearDisplay() {
      this.display.value = '';
    },
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },
    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert("Conta Inválida");
          return;
        }
        this.display.value = String(conta);
      } catch(e) {
        alert("Conta Inválida")
      }
    },
    pressionarEnter() {
      document.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
          this.realizarConta();
        }
      })
    },

    inicia() {
      this.cliqueBotoes();
      this.pressionarEnter();
    },
    cliqueBotoes() {
      //this -> Calculadora
      document.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          //this -> document
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')){
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')){
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')){
          this.realizaConta();
        }
      }.bind(this));
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
    }
  }
}

const calculadora = criarCalculadora();
calculadora.inicia();