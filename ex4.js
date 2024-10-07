// Crie uma classe Veiculo com os atributos marca e modelo. Crie uma 
//classe Moto que herde de Veiculo e adicione um atributo cilindradas. 
//Adicione um método exibirDetalhes que exiba as informações da moto. 

class Veiculo {
    constructor(marca, modelo) { // 1. Define um construtor que recebe marca e modelo.
        this.marca = marca; // 2. Atribui o valor de marca à propriedade da instância.
        this.modelo = modelo; // 3. Atribui o valor de modelo à propriedade da instância.
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) { // 4. Define o construtor da classe Moto.
        super(marca, modelo); // 5. Chama o construtor da classe pai Veiculo.
        this.cilindradas = cilindradas; // 6. Atribui o valor de cilindradas à propriedade da instância.
    }

    exibirDetalhes() {
        console.log(`A moto ${this.marca} ${this.modelo} tem ${this.cilindradas} cilindradas`); // 7. Usa this.cilindradas
    }
}

const novaMoto = new Moto("Honda", "Falcon", 100); // 8. Cria uma nova instância de Moto.
novaMoto.exibirDetalhes(); // Saída: A moto Honda Falcon tem 150 cilindradas

