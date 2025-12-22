// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 50;
var parente = 50;
if (minhaIdade > parente) {
  console.log("Sua idade e Maior");
} else if (minhaIdade < parente) {
  console.log("Sua idade e Menor");
} else {
  console.log("Sua idade e Igual");
}
// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; // true e 3
console.log(!!expressao, expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; // Falsy
var dinheiroNaConta = 0; // Falsy

console.log(
  `${!!nome}\n${!!idade}\n${!!possuiDoutorado}\n${!!empregoFuturo}\n${!!dinheiroNaConta}`
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitante");
} else if (brasil === china) {
  console.log("Brasil tem o mesmo numero de habitantes");
} else {
  console.log("Brasil tem menos habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); // Vai aparece a condicao do Else, pois a primeira condicao ja e falsa, isso faz cair no else, pois a diferenca entre 'Gato' e 'gato', foi escolhida uma comparacao estritamente
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); // Vai aparecer Cao, pois a condicao e verdadeira e o ultimo valor que vai ser retornado.
} else {
  console.log("Falso");
}
