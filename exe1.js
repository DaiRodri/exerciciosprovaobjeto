let carro = {
    fabricante: "Volkswagen",
    modelo: "Gol",
    ano: 2018,
    cor: "vermelho",
    quilometragem: 0,
    dirigir: function(distancia) {
        this.quilometragem += distancia;
    },
    exibirInformacoes: function() {
        console.log(`Carro: ${this.fabricante} ${this.modelo}, Ano: ${this.ano}, Quilometragem: ${this.quilometragem} km, Cor: ${this.cor}`);
    },
    pintarCarro: function(novaCor) {
        this.cor = novaCor;
    }
};

// Dirigindo o carro
carro.dirigir(50);
carro.exibirInformacoes(); // Exibe informações após dirigir

// Pintando o carro de azul
carro.pintarCarro("azul");
carro.exibirInformacoes();