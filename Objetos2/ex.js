// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let eu = {
  nome: "Adriano",
  sobrenome: "Gomes",
  idade: 24,
  profissao: "Desenvolvedor",
  estado: "Sao Paulo",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
eu.completo = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};
