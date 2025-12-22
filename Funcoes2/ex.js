// Crie uma função para verificar se um valor é Truthy
function verificaVerdadeiro(dado) {
  console.log(!!dado);
}
verificaVerdadeiro(0);
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calculaPerimetroQuadrado(lado) {
  return `${lado * 4}`;
}
console.log(calculaPerimetroQuadrado(10));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${(nome, sobrenome)}`;
}
console.log("Adriano", "Gomes");

// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPar(7));
console.log(verificaPar(8));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaTipo(valor) {
  return typeof valor;
}
console.log(verificaTipo("nome"));
console.log(verificaTipo(20));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("Adriano Almeida Gomes");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
