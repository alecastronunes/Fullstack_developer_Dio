var estaAtivo = true;
var total = 0;
var pi = 3.14159;
var nome = "João";
var saudacao = "Ol\u00E1, ".concat(nome, "!");
var numeros = [1, 2, 3];
var frutas = ["maçã", "banana", "cereja"];
var endereco = ["Av. Paulista", 1578];
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
var c = Cor.Verde;
var variavelIndefinida = 4;
variavelIndefinida = "talvez uma string";
function alerta() {
    alert("Esta é uma mensagem de alerta!");
}
console.log(variavelIndefinida);
