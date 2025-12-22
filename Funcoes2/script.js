function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc(80, 1.8); // retorna o imc
console.log(imc(1000, 1.8)); // retorna o imc e undefined

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("oi"));

function faltaVisitar(paisesVisitados) {
  let totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
faltaVisitar(3);

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

console.log(dados()); // Retorna 'Adriano, 29, Rio de Janeiro, Designer'
// outrosDados(); // Retorna um erro
