// - Crie variáveis para cada tipo básico e imprima-as. Tente atribuir valores incorretos a essas variáveis para ver o que acontece.

let estaAtivo: boolean = true;

let total: number = 0;
let pi: number = 3.14159;

let nome: string = "João";
let saudacao: string = `Olá, ${nome}!`;

let numeros: number[] = [1, 2, 3];
let frutas: Array<string> = ["maçã", "banana", "cereja"];

let endereco: [string, number] = ["Av. Paulista", 1578];

enum Cor {
  Vermelho,
  Verde,
  Azul,
}
let c: Cor = Cor.Verde;

let variavelIndefinida: any = 4;
variavelIndefinida = "talvez uma string";

function alerta(): void {
  alert("Esta é uma mensagem de alerta!");
}

console.log(variavelIndefinida);
