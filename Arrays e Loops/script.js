// var ultimoItem = videoGames.pop();
// videoGames.push("3DS");

// for (let numero = 0; numero < 4; numero++) {
//   console.log(numero);
// }

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i = i + 5;
// }

var videoGames = ["Switch", "PS4", "XBox", "3DS"];

for (let item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]); // usar no trabalho da faculdade
  if (videoGames[item] === "PS4") {
    break;
  }
}
// Se desejar visualizar o item de vai gerar o break, tem que colocar o console.log antes da condição que vai gerar o break.

var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];
frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});
// Pode passar qualquer nome para os parâmetros da função, não precisa ser exatamente esses.
