// Crie uma função que não retorna nada (void) e outra que retorna undefined. Compare as duas.

function naoRetornaNada():void {
    console.log("Função sem retorno.");
}

function indefinida():undefined {
    console.log("Função com retorno indefinido.");
}

if(naoRetornaNada() === indefinida()) {
    console.log("Os valores são iguais.");
}else {
    console.log("Os valores são diferentes.");
}