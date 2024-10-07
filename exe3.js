//Crie uma classe Retangulo com os atributos largura e altura. Adicione um 
//método calcularArea que retorne a área do retângulo.

class Retangulo{
    largura = 5
    altura = 10

calculaArea (){
    const area = this.largura * this.altura
    console.log(`Area é ${area}`)
}}
const novoRetangulo = new Retangulo()
novoRetangulo.calculaArea()