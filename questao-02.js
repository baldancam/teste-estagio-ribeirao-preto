/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

// Verifica se é um número da sequencia fibonacci.
function isFibonacci(number) {
  let a = 0;
  let b = 1;

  // Este laço executa enquanto o valor de a for menor ou igual ao número fornecido, caso a seja igual ao número fornecido ele retorna true, caso a fique maior que o número fornecido sem ter ficado igual ele retorna false.
  while (a <= number) {
    if (a === number) {
      return true;
    }

    // Avança para o proximo número da sequencia fibonacci.
    let temp = a + b;
    a = b;
    b = temp;
  }

  return false;
}

let inputNumber = 2584; // informa o número a ser verificado

// se o laço encontrar o número fornecido na sequencia fibonacci ele retorna um true e exibe o número fornecido no console com a mensegem de pertencente, caso não encontre o número na listagem ele retorna false e executa o else que exibe o número fornecido no console com a mensagem de não pertencente.
if (isFibonacci(inputNumber)) {
  console.log(inputNumber + " pertence à sequência de Fibonacci.");
} else {
  console.log(inputNumber + " não pertence à sequência de Fibonacci.");
}
