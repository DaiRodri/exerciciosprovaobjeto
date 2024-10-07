//Crie uma classe Produto com um construtor que aceite dois ou três 
//parâmetros (nome, preco, categoria). Se categoria não for informado, 
//defina como "Indefinido".

class Produto {
    constructor (nome,preco,categoria){
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    
        if ( this.categoria = undefined){
            this.categoria = "Indefinido"
     
         }else{
             this.categoria= categoria  
         }
    
    }
    exibirinformacao(){
    console.log(`nome: ${this.nome},preço: ${this.preco.toFixed(2)}, categoria: ${this.categoria}`)
   
}}
const produ1 = new Produto ("Arroz",30,2)
const produ2 = new Produto (" Fejão",20)
produ1.exibirinformacao()
produ2.exibirinformacao()