/* Boolean */
// Existem dois valores booleanos true ou false
// var possuiGraduacao = true;
// var possuiDoutorado = false;

/* Condicionais if e Else */
// Verificar se uma expressão é verdadeira com 'if', caso contrário o 'else' será ativado.
var possuiGraduacao = true;
if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}
// Retorna Possui Graduação e não executa o else
// O valor dentro dos Parênteses sempre será avaliado em true ou false.

/* Else if */
// Se o if não for verdadeiro, ele testa o else if

var possuiGraducao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// Retorna Possui Graduação, mas não possui doutorado

/* Truthy e Falsy */
// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
if (false);
if (0); // ou -0
if (NaN);
if (null);
if (undefined);
if (""); // ou "" ou ``
// Todo o resto é truthy

/* Truthy */
if (true);
if (1);
if (" "); // espaço conta como caracter e por isso é verdadeiro.
if ("Adriano");
if (-5);
if ({});

/* Operador Lógico de Negação ! */
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false ou no caso vira false.

// Truthy
if (!true); // false
if (!1); // false
if (!""); // true
if (!undefined); // true
if (!!" "); // true
if (!!""); // false
// !! com os dois na frente acontece o seguinte, o primeiro converte e o segundo converte para o estado anterior a conversão feita antes.
// Dica você pode utilizar o !! para verificar se uma expressão é Trusthy ou Falsy

/* Operadores de Comparação */
// Vão sempre retornar um valor booleano
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

/* Operadores de Comparação */
// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true
