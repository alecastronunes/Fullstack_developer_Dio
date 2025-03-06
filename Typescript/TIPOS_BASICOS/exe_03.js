// Crie um enum para representar os dias da semana e use-o em uma função que imprime uma mensagem de acordo com o dia passado.
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["Segunda"] = 0] = "Segunda";
    diasSemana[diasSemana["Ter\u00E7a"] = 1] = "Ter\u00E7a";
    diasSemana[diasSemana["Quarta"] = 2] = "Quarta";
    diasSemana[diasSemana["Quinta"] = 3] = "Quinta";
    diasSemana[diasSemana["Sexta"] = 4] = "Sexta";
    diasSemana[diasSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    diasSemana[diasSemana["Domingo"] = 6] = "Domingo";
})(diasSemana || (diasSemana = {}));
function exibeDiaSemana(dia) {
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
