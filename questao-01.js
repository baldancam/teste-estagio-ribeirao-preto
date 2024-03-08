/*
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?

R: Ao final do processamento a variável SOMA = 91;
*/

let INDICE = 13;
let SOMA = 0;

// a variável k na pergunta, serve para armazenar a quantidade de loops necessáras.
for (let k = 0; k <= INDICE; k++) {
  SOMA += k;
}

console.log(SOMA);
