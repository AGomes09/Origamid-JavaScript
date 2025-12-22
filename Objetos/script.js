var pessoa = {
  nome: "Adriano",
  idade: 28,
};

console.log(pessoa);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};
console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20

console.log(Math.random());
