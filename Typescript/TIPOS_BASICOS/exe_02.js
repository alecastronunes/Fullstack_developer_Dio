// - Escreva uma função que aceita um array de números e retorna a soma de todos os elementos. Assegure-se de tipar tanto a entrada quanto a saída da função.
function soma(numeros) {
    var totalSoma = 0;
    for (var i = 0; i < numeros.length; i++) {
        totalSoma += numeros[i];
    }
    return totalSoma;
}
//let numeros: number[] = [1, 2, 3, 4, 5];
var arrayNumeros = [1, 2, 5, 6, 9, 10];
console.log(soma(arrayNumeros));
