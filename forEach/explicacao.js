/* forEach */
// Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
const imgs = document.querySelectorAll("img");
imgs.forEach(function (item) {
  console.log(item);
});

/* Parâmetros do forEach */
// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: valorAtual, index e array;
imgs.forEach(function (valorAtual, index, array) {
  console.log(valorAtual); // O item atual no loop
  console.log(index); // o número do index
  console.log(array); // o Array completo
});

/* forEach e Array */
// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});

/* Arrow Function */
// Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
const imgs = document.querySelectorAll("img");
imgs.forEach((item) => {
  console.log(item);
});

/* Argumentos e Parênteses */
const imgs = document.querySelectorAll("img");

// argumento único não precisa de parênteses
imgs.forEach((item) => {
  console.log(item);
});

// multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio.
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});
// É melhor sempre utilizar os parênteses

/* Return */
// É possível omitir as chaves {} para uma função que retorna uma linha.
const imgs = document.querySelectorAll("img");
imgs.forEach((item) => console.log(item));
// Não é permitido fechar a linha com ;
