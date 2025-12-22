/* Operadores de Atribuição */
// Podem funcionar como formas abreviadas
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

/* Operador Ternário */
// Abreviação de condicionais com if e else
var idade = 19;
var podeBeber = idade >= 18 ? "Pode Beber" : "Não pode beber";
console.log(podeBeber);
// Condição ? true : false
// Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição.

/* IF Abreviado */
// Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código
var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui faculdade");
else console.log("Não possui faculdade");

//  ou
if (possuiFaculdade) console.log("Possui faculdade");
else console.log("Não possui faculdade");
