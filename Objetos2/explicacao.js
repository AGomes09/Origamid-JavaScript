/* Criar um Objeto */
// Um objeto e criado utilizando as chaves {};
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'Object'

/* Dot Notation Get */
// Acesse propriedades de um objeto utilizando o ponto '.'

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};
var bg = menu.backgroundColor; // "#84E"

/* Dot Notation Set */
// Substitua o valor de uma propriedade utilizando . e o = apos o nome da mesma.
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};
menu.backgroundColor = "#000";
console.log(menu.backgroundColor);

/* Adicionar Propriedades e Metodos*/
// Basta adicionar um novo nome e definir um valor
var menu = {
  width: 800,
};

menu.height = 50;
menu.position = "fixed";

/* Palavra-chave this */
// this ira fazer uma referencia ao proprio objeto
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};
menu.metadeHeight(); // 25
// sem o this, seria 60
// this ira retornar o proprio objeto.

/* Prototipo e Heranca */
// O objeto herda propriedades e metodos do objeto que foi utilizado para criar o mesmo.
var menu = {
  width: 800,
};
menu.hasOwnProperty("width"); // true
menu.hasOwnProperty("height"); // false
// hasOwnProperty e um metodo de Object
