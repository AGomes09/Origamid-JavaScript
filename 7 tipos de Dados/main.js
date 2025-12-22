var nome = "Adriano"; // String
var idade = 24; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object
// Primitivos sao dados imutaveis.

console.log(typeof simbolo);

// Template String

var gols = 1000;
var frase1 = "Romario fez " + gols + "gols";
var frase2 = `Romario fez ${gols * 2} gols`; // Utilizando o Template String

console.log(frase2);
