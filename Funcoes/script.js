function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}
var total = 5 * pi(); // 15.7
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Voce gosta do ceu";
  } else if (cor === "verde") {
    return "Voce gosta de mato";
  } else {
    return "Voce nao gosta de nada";
  }
}
function mostraConsole() {
  console.log("Oi"); //
}

addEventListener("click", mostraConsole);
