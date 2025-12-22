// window.alert("Isso mesmo");

const href = window.location.href;

console.log(href);

if (href === "http://127.0.0.1:5500/DOM/") {
  console.log("É igual");
} else {
  console.log("Página Errada");
}

const h1Selecionado = document.querySelector("h1");

const h1Classes = h1Selecionado.classList;

function callbackH1() {
  console.log("Clicou em", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackH1);
