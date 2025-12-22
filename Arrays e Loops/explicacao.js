/* Array */
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
var videoGames = ["Switch", "PS4", "XBox"];
videoGames[0]; // Switch
videoGames[2]; // Xbox
// Acesse um elemento da array utilizando o [n]
// Array é base 0, isso significa que começa a contar a posição dos elementos no indice/posição 0

/* Métodos e Propriedades de um Array */
var videoGames = ["Switch", "PS4", "XBox"];

videoGames.pop(); // Remove o último item e retorna ele.
videoGames.push("3DS"); // Adiciona ao final da array
videoGames.length; // vai retornar o tamanho do array, nesse caso 3, pois tem 3 itens dentro do array
// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais a frente.

/* For Loop */
// Fazem algo repetidamente até que uma condição seja atingida.
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console
// O For Loop possui 3 partes, Início, Condição e Incremento.

/* While Loop */
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console
// O for loop é o mais comum
// Incremento no contador não precisa ser i++ que é mesma coisa de i = i + 1, pode ser feito assim também i = i + 5, tudo depende da condição que você precisa.

/* BREAK */
// O loop irá parar caso encontre a palavra break
var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}

/* forEach */
// forEach é um método que executa uma função para cada item do Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
var videoGames = ["Switch", "PS4", "XBox", "3DS"];
videoGames.forEach(function (item) {
  console.log(item);
});
// O argumento item  será atribuído dinamicamente
// Podemos passar os seguintes parâmetros:
// item, index e array

/* Não se confunda com a sintaxe */
var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}
// Não é aconselhavel escrever desse forma acima, mas funciona normalmente.
