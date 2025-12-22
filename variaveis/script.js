// var nome = 'Adriano';
// var idade = 24;

// console.log(nome,"\n", idade)
// Criando varias variaveis de uma vez
var sobrenome = 'Gomes',
    cidade = 'interior-SP';
console.log(sobrenome, cidade)

// Sem valor, Pode declarar ela e nao atribuir valor inicialemente.
var semDefinir;
//  retorna undefined
console.log(semDefinir)

// Nomes para variaveis
// > Os nomes podem iniciar com $, _, ou letras. Podem conter numeros, mas jamais iniciar com eles.

// Invalidos
// var %nome;
// var function;
// var 1possuiFaculdade;

// Validos
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

// Hoisting
// Sao movidas para cimda do codigo, porem o valor atribuido nao e movido
console.log(nome);
var nome = 'Adriano'
// Retorna undefined

let profissao ='Desenvolvedor'
console.log(profissao);
// Retorna Design