function naoRetornaNada() {
    console.log("Função sem retorno.");
}
function indefinida() {
    console.log("Função com retorno indefinido.");
}
if (naoRetornaNada() === indefinida()) {
    console.log("Os valores são iguais.");
}
else {
    console.log("Os valores são diferentes.");
}
