"use strict";
function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro);

if (true) {
  let mes = "Dezembro";
  console.log(mes);
}
// console.log(mes);

{
  var carro2 = "Fusca2";
  const ano = 2018;
}
console.log(carro2);
// console.log(ano); // erro ano is not defined

// for (let i = 0; i < 10; i++) {
//   console.log(`Número ${i}`);
// }
// console.log(i); // 10

// console.log(i * 10);
const semana = "Sexta";
// semana = "Quinta";
console.log(semana);

const data = {
  ano: 2018,
  mes: "Dezembro",
};

data.ano = 2019;
data.dia = 25;
