// Crie uma tupla que representa um produto (com nome e preço). Use essa tupla em uma função que imprime o nome e o preço do produto.

let produto: [string, number] = ["Caneta Azul", 1.69];

function imprimirProduto(nomeProduto: string, precoProduto: number):void {
    console.log(`Promoção de "${nomeProduto}" por apenas R$${precoProduto}... Aproveite!!!`);
}

imprimirProduto(produto[0], produto[1]);
