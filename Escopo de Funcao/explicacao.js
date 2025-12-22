/* Escopo de Função */
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas
function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined
// Escopo evita o conflito entre nomes

/* Variável Global (Erro) */
// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessada em qualquer escopo (global). Isso é um erro.
function mostrarCarro() {
  carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca
// 'use strict' impede isso.

/* Escopo de Função (PAI) */
// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pela funções.
var carro = "Fusca";

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); //Meu carro é um Fusca
console.log(carro);

/* Escopo de Bloco */
// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarar uma variável é utilizando const e let, pois estas respeitam o escopo de bloco
if (true) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro);

/* Const e Let no lugar de Var */
// A partir de agora vamos utilizar apenas const e let para declarar variáveis.
if (true) {
  const carro = "Fusca";
  console.log(carro);
}
console.log(carro); // erro, carro is not defined

/* {} Cria um bloco */
// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}
{
  var carro = "Fusca";
  const ano = 2018;
}
console.log(carro);
console.log(ano); // erro ano is not defined

/* For Loop */
// Ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existir fora do loop.
for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10

/* Const */
// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
const mes = "Dezembro";
mes = "Janeiro"; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; // Funciona
data = "Janeiro"; // erro

/* Let */
// Mantém o escopo do bloco, impede a redeclaração, mas permite a modificação do valor da variável.
let ano1;
ano1 = 2018;
ano1++;
console.log(ano1); // 2019

// let ano1 = 2020; // erro, redeclarou a variável.
// Geralmente vamos utilizar o const
