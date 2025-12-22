var nome = "Adriano";

var nomeMinusculo = nome.toLowerCase();

var btn = document.querySelector(".btn"); // O argumento passado para localizar no html é igual se referir a um seletor no CSS

btn.addEventListener("click", function () {
  // callback é o que vai acontecer dentro da função, no caso o que ela vai retornar.
  console.log("Clicou abestado");
});
