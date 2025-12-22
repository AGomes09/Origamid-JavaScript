if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional = 5 - 10 && 5 + 5;

if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso");
}

var condicional2 = 5 - 5 || (5 + 5 && 10 - 2);
console.log(condicional2);
// Vai retornar 8, pois ambas sao verdadeiras e no caso && retorna o ultimo valor.

var corFavorita = "Verde";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o ceu.");
    break; // Vai parar aqui caso a condicao seja verdadeira.
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  case "Verde":
    console.log("Olhe para a floresta.");
    break;
  default: // Padrao, caso nenhuma das condicoes seja verdadeira, ele executa o que foi definido nele.
    console.log("Feche os olhos.");
}
