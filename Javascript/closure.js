// Closure é um conceito em programação que ocorre quando uma função "lembra" do ambiente onde foi criada, mesmo depois de ser executada em outro lugar. Imagine que você tem uma caixa(função externa) que contém outra caixa menor(função interna) e alguns itens(variáveis). Quando você envia a caixa menor para outro lugar, ela ainda consegue "lembrar" e acssar os itens que estavam na caixa grande original.

function criarContador() {
  let contador = 0; // Esta é uma variável na função externa.

  return function () {  // Esta é a função interna que estamos retornando.
    contador++;         // Ela "lembra" e pode acessar a variável contador
    return contador;
  };
}

const meuContador = criarContador();

console.log(meuContador());
console.log(meuContador());
console.log(meuContador());
console.log(meuContador());
