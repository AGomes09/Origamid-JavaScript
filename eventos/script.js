const linksInternos = document.querySelectorAll('a[href^="#"]');

function handlelink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", handlelink);
});

// const todosElementos = document.querySelectorAll("body *");

// function handleElemento(event) {
//   event.currentTarget.remove("ativo");
// }

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElemento);
// });

function handleClickT(event) {
  console.log(event.key);

  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleClickT);
