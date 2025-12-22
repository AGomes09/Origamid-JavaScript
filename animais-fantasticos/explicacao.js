/* Classe e Tag */
// getElementsByClassName e getElementByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
const contato = document.getElementsByClassName("grid-section contato"); // Só vai selecionar o elemento que possuir essas duas classes grid-section e contato

// Seleciona todas as UL's retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);

/* Seletor Geral Único */
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".aniamis-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

// Busca dentro da UL apenas
const navItem = primeiroUl.querySelector("li");

/* Seletor Geral Lista */
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection = document.querySelectorAll(".grid-section");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAniamis = document.querySelectorAll(".animais-lista img");

// Retorna o segundo elemento
console.log(gridSection[1]);

// Diferente do getElementsByClassName, a lista aqui é estática.

/* Elementos 2 */
// HTMLCollection vs NodeList
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

titulo.classList.add("grid-section");

/* Array-Like */
// HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList
const gridSection = document.querySelectorAll(".grid-section");

gridSection.forEach(function (gridItem, index, array) {
  gridItem.classList.add("azul");
  console.log(index); // index do item na array
  console.log(array); // array completa
});
// É possível transformar array-like em uma Array real, utilizando o método array.from(grid-section)
