/* Operadores Logicos && */
// "&&" Compara se uma expressao "e" a outra e verdadedeira. "&& = e"
true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cao"; // Cao
5 - 5 && 5 + 5; // 0
"Gato" && false; //  false
5 >= 5 && 3 < 6; // true
// Se ambos os valors forem true, ele ira retornar o ultimo valor verificado. Se algum valor for false, ele ira retornar o mesmo e nao ira continuar a verificar os proximos.

/* Operadores Logicos || */
// || Compara se uma expressao ou outra e verdadeira. "|| = ou"
true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cao"; // Gato
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true
// Retorna o primeiro valor true que encontrar.

/* Switch */
// Com o switch voce pode verificar se uma variavel e igual a diferentes valores utilizando "case". Caso ela seja igual, voce pode fazer alguma coisa e utilizar a palavra chave "break; para cancelar a continuacao. O valor de default ocorre caso nenhuma das anteriores seja verdadeira."
var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olha para o ceu.");
    break;
  case "Vermelho":
    console.log("Olhe para rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
}
