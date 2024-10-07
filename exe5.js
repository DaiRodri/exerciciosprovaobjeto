//Crie uma classe ContaBancaria com os atributos titular e saldo 
//(inicialmente 0). Adicione métodos depositar(valor) e sacar(valor). Proteja 
//o atributo saldo para que não seja acessado diretamente. 

class ContaBancaria {
    constructor(titular, saldoinicial) {
        this.titular = titular; // Atribui o titular da conta
        this.saldo = saldoinicial; // Atribui o saldo inicial
    }

    exibirSaldo() { // Renomeado para evitar conflito com a propriedade saldo
        console.log(`O saldo da conta do titular ${this.titular} é ${this.saldo.toFixed(2)}`);
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log(`O valor depositado precisa ser maior que 0`);
            return;
        }
        this.saldo += valor; // Atualiza o saldo
        console.log(`O valor depositado é ${valor.toFixed(2)} depositado com sucesso`);
    }

    sacar(valor) {
        if (valor <= 0) {
            console.log(`Você deve sacar um valor maior que 0`);
            return;
        }
        if (valor > this.saldo) {
            console.log(`O seu saldo é insuficiente`);
            return; // Para evitar a continuação do método
        }
        this.saldo -= valor; // Atualiza o saldo
        console.log(`Você sacou ${valor.toFixed(2)}. O saldo atual é ${this.saldo.toFixed(2)}`);
    }
}

// Exemplo de uso
const conta = new ContaBancaria("João", 1000.00);
conta.exibirSaldo(); // Exibe o saldo inicial
conta.depositar(0); // Deposita 200
conta.sacar(150); // Saca 150
conta.exibirSaldo(); // Exibe o saldo após as transações

