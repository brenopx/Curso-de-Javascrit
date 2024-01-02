function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.caputaCliques();
    this.capturaEnter();
  }

  this.capturaEnter = () => {
    document.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        this.realizarConta();
      }
    })
  }

  this.caputaCliques = () => {
    document.addEventListener('click', event =>{
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear(el);
      if (el.classList.contains('btn-del')) this.del(el);
      if (el.classList.contains('btn-eq')) this.realizarConta(el);
    });
  };

  this.realizarConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida')
      }
      this.display.value = conta;
    } catch(e) {
      alert("Conta inválida")
      return ;
    }
  }

  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  }

  this.clear = () => this.display.value = '';
  
  this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();