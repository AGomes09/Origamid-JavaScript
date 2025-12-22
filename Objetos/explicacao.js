/* Objetos */
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: "Adriano",
  idade: 28,
  profissao: "Designer",
  possuiFaculdade: true,
};

pessoa.nome; // 'Adriano'
pessoa.possuiFaculdade; // true
// Propriedades e métodos consistem em nome (chave) e valor.

/* Métodos */
// É uma propriedade que possui uma função no local do seu valor.
// this. é o proprio objeto, é usado para não ter que usar o nome do objeto novamente.
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

/* Métodos */
// Abreviação de area: function() {} para area() {}, no ES6+
var quadrado1 = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

/* Organizar o Código */
// Objetos servem para organizar o código em pequenas partes reutilizáveis.
Math.PI; // 3.14
Math.random(); // Número aleatório

var pi = Math.PI;
console.log(pi); // 3.14
// Math é um objeto nativo de JavaScript. Já percebeu que 'console' é um objeto e ´log()' um método?
