//Crie uma classe chamada Carro com os seguintes atributos: marca, 
//modelo e ano. A classe deve ter um método chamado exibirDetalhes que 
//retorne uma string com as informações do carro. 

class Carro {
    marca = "Nissan";
    modelo = "March";
    ano = 2020;

    exibirdetalhes() {
        console.log(`O carro da marca ${this.marca}, modelo ${this.modelo} e ano ${this.ano}`);
    }
}
const meuCarro = new Carro()
meuCarro.exibirdetalhes()

