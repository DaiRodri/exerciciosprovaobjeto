//Crie uma classe Endereco com atributos rua e numero. Crie uma classe 
//Pessoa que agregue um endereço e exiba a mensagem "Nome: nome, 
//Endereço: rua, número". 

class Endereco {
    constructor(rua,numero){
    this.rua = rua
    this.numero = numero 
    }

}
class Pessoa extends Endereco{
    constructor(pessoa,rua,numero){
    super (rua,numero)
    this.pessoa = pessoa
}
exibirinformacao(){
    console.log(`O nome: ${this.pessoa}, rua: ${this.rua}, numero: ${this.numero}`)
}

}

const info = new Pessoa("Daiana","Riachuelo",1142)
info.exibirinformacao ()
