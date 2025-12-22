const menu = document.querySelector(".menu");

menu.classList.add("ativo");
menu.classList.remove("azul");
menu.classList.toggle("azul");

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
}

// menu.className = menu.className + " vermelho";

menu.className += " vermelho";
// console.log(menu.classList.add);

const img = document.querySelector("img");
const srcImg = img.getAttribute("alt");

img.setAttribute("alt", "É uma raposa");

const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);
console.log(srcImg);

const carro = {
  portas: 4,
  andar: function (km) {
    console.log(`Andou ${km}`);
  },
};
