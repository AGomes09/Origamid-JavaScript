/* Pode ou não retornar um valor */
/* Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não. */
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc(80, 1.8); // retorna o imc
console.log(imc(80, 1.8)); // retorna o imc e undefined

/* Valores retornados */
// Uma função pode retornar qualquer tipo de dado e até outras funções
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return "Não é terceira idade";
  }
}
// Cuidado, retornar diferentes tipos de dados na mesma função, não é uma boa ideia.
console.log(terceiraIdade(30));

/* Escopo */
// Variáveis e funções  definidas dentro de um bloco {}, não são visíveis fora dele.
function precisoVisitar(PaisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - PaisesVisitados} países para visitar`;
}

/* Escopo Léxico */
// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = "Designer";
function dados() {
  var nome = "Adriano";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'Adriano, 29, Rio de Janeiro, Designer'
outrosDados(); // Retorna um erro

/* Hoisting */
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória.
imc(80, 1.8); // imc aparece no console
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
