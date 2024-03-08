// Task 1:

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log("A soma dos primeiros " + INDICE + " números inteiros é: " + SOMA);

// A soma é 91
// ============================================================================= //

// Task 2:

function pertenceFibonacci(numero) {
    let anterior = 0;
    let atual = 1;

    while (atual <= numero) {
        if (atual === numero) {
            return true;
        }
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    return false;
}

let numeroInformado = 13; // Número que você deseja verificar se pertence à sequência de Fibonacci

if (pertenceFibonacci(numeroInformado)) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}

// 13 pertence à sequência de Fibonacci.
// ============================================================================= //

// Task 3:

// a) 1, 3, 5, 7, ___
// Esta sequência parece ser uma progressão aritmética com uma diferença constante de 2. O próximo número seria 9.

// b) 2, 4, 8, 16, 32, 64, ____
// Esta sequência parece ser uma progressão geométrica onde cada termo é obtido multiplicando o anterior por 2. O próximo número seria 128.

// c) 0, 1, 4, 9, 16, 25, 36, ____
// Estes são os quadrados dos números naturais consecutivos. O próximo número seria o quadrado de 7, que é 49.

// d) 4, 16, 36, 64, ____
// Essa sequência é formada pelos quadrados dos números pares. O próximo número seria o quadrado de 6, que é 36.

// e) 1, 1, 2, 3, 5, 8, ____
// Esta sequência parece ser a sequência de Fibonacci. O próximo número seria a soma dos dois números anteriores, que é 13.

// f) 2, 10, 12, 16, 17, 18, 19, ____
// Esta sequência não segue uma lógica evidente. No entanto, parece que cada termo é o resultado de uma operação aritmética ou combinação de operações aritméticas com os termos anteriores. Uma possível continuação poderia ser adicionando 1 ao termo anterior. Portanto, o próximo número seria 20.

// Então, as sequências completadas seriam:

// a) 1, 3, 5, 7, 9
// b) 2, 4, 8, 16, 32, 64, 128
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2, 10, 12, 16, 17, 18, 19, 20

// ============================================================================= //

// Task 4:

// - Primeira visita à sala das lâmpadas:

// Ligue um interruptor e deixe-o ligado por alguns minutos.
// Desligue o interruptor.
// Agora, você sabe que uma das lâmpadas está acesa e as outras duas estão apagadas.

// - Segunda visita à sala das lâmpadas:

// Ligue um interruptor diferente (que você não ligou na primeira vez) e deixe-o ligado.
// Deixe o outro interruptor desligado.
// Agora, você tem as seguintes possibilidades:

// Se a lâmpada ligar, então o interruptor que você acabou de ligar controla essa lâmpada.
// Se a lâmpada permanecer apagada, então o interruptor que você deixou desligado na segunda visita controla essa lâmpada.
// O interruptor que você ligou na primeira visita controla a lâmpada que permaneceu apagada durante ambas as visitas.
// Dessa forma, você pode determinar qual interruptor controla cada lâmpada em apenas duas visitas à sala das lâmpadas.

// ============================================================================= //

// Task 5:

function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

let stringOriginal = "Hello, world!"; // String a ser invertida

let stringInvertida = inverterString(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
