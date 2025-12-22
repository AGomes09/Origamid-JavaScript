/* Funcoes */
// Bloco de codigo que pode ser executado e reutilizado. Valores podem ser passados por uma funcao e a mesma retorna outro valor
function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(4)); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4
// Chamada de function declaration

function pi() {
  return 3.14;
}
var total = 5 * pi(); // 15.7
// Parenteses () executam uma funcao

/* Parametro e Argumentos */
// Ao criar uma funcao, voce pode definir parametros.
// Ao executar uma funcao, voce pode passar argumentos.
// peso e altura sao parametros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}
imc(80, 1.8); // 80 e 1.80 sao os argumentos
imc(60, 1.7); // 60 e 1.70 sao os argumentos
// Separar por virgula cada parametro. Voce pode definir mais de um parametro ou nenhum tambem.

/* Parenteses executa a funcao */
function corFavorita(cor) {
  if (cor === "azul") {
    return "Voce gosta do ceu";
  } else if (cor === "verde") {
    return "Voce gosta de mato";
  } else {
    return "Voce nao gosta de nada";
  }
}

corFavorita(); // retorna 'Voce nao gosta de nada
// Se apenas definirmos a funcao com o function e nao executarmos a mesma, nada que estiver dentro dela ira acontecer.

/* Argumentos podem ser funcoes */
// Chamadas de Callback, geralmente sao funcoes que ocorrem apos algum evento.
addEventListener("click", function () {
  console.log("Clicou");
});
// A funcao possui dois argumentos
// Primeiro e a string 'click'
// Segundo e uma funcao anonima
// Funcoes anonimas sao aquelas em que o nome da funcao nao e definido, escritas como: function(){} ou () => {}
