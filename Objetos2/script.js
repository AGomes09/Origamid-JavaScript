var height = 120;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};
menu.backgroundColor = "#000"; // Mudando o valor do backgroundColor

menu.color = "blue"; // Criando a proprieda color blue dentro do objeto menu.
menu.esconder = function () {
  console.log("Escondi");
};
var bg = menu.backgroundColor;
