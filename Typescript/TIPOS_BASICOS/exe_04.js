// Crie uma tupla que representa um produto (com nome e preço). Use essa tupla em uma função que imprime o nome e o preço do produto.
var produto = ["Caneta Azul", 1.69];
function imprimirProduto(nomeProduto, precoProduto) {
    console.log("Promo\u00E7\u00E3o de \"".concat(nomeProduto, "\" por apenas R$").concat(precoProduto, "... Aproveite!!!"));
}
imprimirProduto(produto[0], produto[1]);
