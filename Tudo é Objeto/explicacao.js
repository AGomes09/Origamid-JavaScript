/* Tudo é Objeto */
// String, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
var nome = "Adriano";

nome.length; // 7
nome.charAt(1); // 'd'
nome.replace("no", "não"); // 'Adrianão'
nome; // 'Adriano'
// Uma string herda propriedades e métodos do construtor String()

/* Números */
var altura = 1.8;
altura.toString(); // '1.8'
altura.toFixed(); // '2'
// Por um breve momento o número é envolvido em um Objeto (coerção, tendo acesso assim as suas propriedades e métodos)

/* Funções */
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
// "function areaQuadrado(lado){
// return lado * lado;
// }"
areaQuadrado.length; // 1

/* Elementos do DOM */

/* <a class="btn" href="#">Clique</a> */
var btn = document.querySelector(".btn");
btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});
// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.
// Ex: Propriedade do botão para esconder ele, ai vai ver se existe ou não existe.
// DOM é MÉTODOS e PROPRIEDADES.

/* Objetos revolucionaram a programação */
// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.
// Sempre que tem comunicação entre duas máquinas no caso código com código, isso se chama API.
