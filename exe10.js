//Crie uma classe Matematica com um método estático somar(a, b) que 
retorna a soma dos dois números. 
  class Matematica {
    // Método estático para somar dois números
    static somar(a, b) {
      return a + b;
    }
  }
  
  // Exemplo de uso
  const resultado = Matematica.somar(5, 3);
  console.log(`A soma é: ${resultado}`); // Saída: A soma é: 8
