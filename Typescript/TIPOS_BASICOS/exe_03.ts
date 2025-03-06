// Crie um enum para representar os dias da semana e use-o em uma função que imprime uma mensagem de acordo com o dia passado.

enum diasSemana {
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sábado,
  Domingo,
}

function exibeDiaSemana(dia: diasSemana): void {
  switch (dia) {
    case diasSemana.Segunda:
      console.log("Começando a semana com força!");
      break;
    case diasSemana.Terça:
      console.log("Dia de produtividade!");
      break;
    case diasSemana.Quarta:
      console.log("Já passou metade da semana!");
      break;
    case diasSemana.Quinta:
      console.log("Quase sexta!");
      break;
    case diasSemana.Sexta:
      console.log("Sexta-feira, dia de alegria!");
      break;
    case diasSemana.Sábado:
      console.log("Dia de descanso e lazer!");
      break;
    case diasSemana.Domingo:
      console.log("Domingo, dia de família!");
      break;
    default:
      console.log("O dia informado é inválido!!!");
      break;
  }
}

exibeDiaSemana(diasSemana.Sexta);
