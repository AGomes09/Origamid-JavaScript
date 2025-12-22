// Retorne no console todas as imagens do site
const imagem = document.querySelectorAll("img");
console.log(imagem);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const apenasImagem = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(apenasImagem);
// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);
// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector(".animais-descricao");
const animaisH2 = animais.querySelector("h2");
console.log(animaisH2);
// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);
