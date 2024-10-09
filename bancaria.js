// Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
//Dentro de ContaBancaria, crie os métodos sacar e depositar;
// Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
//Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
//Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
//Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
//Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

class ContaBancaria {
    constructor (agencia,numero,tipo,saldo){
        this.agencia=agencia  
        this.numero=numero
        this.tipo=tipo
        this.saldo=saldo 
    }
   
sacar(valor){
    if(valor > 0 && valor <= this.saldo){
        this.saldo -= valor
        console.log(` o saque foi de ${valor} , restou de saldo ${this.saldo}`)
    } else{
        console.log(` saldo insuficiente`)
    } 
    }


depositar(valor){
    if (valor > 0){
        this.saldo += valor
        console.log(` Deposito de ${valor} realizado com sucesso, seu saldo é ${this.saldo}`)
    }else{
        console.log (` deposite um valor positivo`)
    }

}
}

    class ContaCorrente extends ContaBancaria {
    constructor(agencia,numero,tipo,saldo,cartaodecredito){
        super (agencia,numero,"conta corrente",saldo)
        this.cartaodecredito= cartaodecredito

    }

}
class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero,tipo,saldo,) {
        super(agencia, numero,tipo,saldo )
}
}
class ContaUniversitaria extends ContaBancaria{
    constructor (agencia, numero,tipo,saldo,) {
        super(agencia, numero,tipo,saldo )
}

sacar(valor) {
    if (valor > 0 && valor <= this.saldo && valor < 500) {
      this.saldo -= valor;
      console.log(` o saque foi de ${valor} , restou de saldo ${this.saldo}`)
    } else {
      console.log(" saldo insuficiente.");
    }
  }
}
  const contaCorrente = new ContaCorrente("2020", "12345", "corrente",1500);
  contaCorrente.depositar(500);
  contaCorrente.sacar(800); 
  
  const contaPoupanca = new ContaPoupanca("1919","45678", "poupança", 1000);
  contaPoupanca.depositar(100);
  contaPoupanca.sacar(500); 
  
  const contaUniversitaria = new ContaUniversitaria("2222", "54321", "universitaria",500);
  contaUniversitaria.depositar(199);
  contaUniversitaria.sacar(300); 
  contaUniversitaria.sacar(700);

