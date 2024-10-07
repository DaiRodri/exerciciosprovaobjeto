//Crie uma classe Animal com um método emitirSom. Crie classes Cachorro 
//e Gato que herdem de Animal e sobrescrevam o método emitirSom para 
//exibir "Latido" e "Miau" respectivamente. 
class Animal {
    
emitirSom() { // Este método será sobrescrito nas subclasses
        
console.log("Som de animal");
    }
}

class Cachorro extends Animal {
emitirSom() {
        
console.log("auaua"); // Som do cachorro
    }
}
class Gato extends Animal {
    
emitirSom() {
console.log("Miau"); // Som do gato
    }
}

// Criando instâncias de Cachorro e Gato
const cachorro = new Cachorro();
const gato = new Gato();

// Emitindo os sons
cachorro.emitirSom(); // Saída: Latido
gato.emitirSom();     // Saída: Miau