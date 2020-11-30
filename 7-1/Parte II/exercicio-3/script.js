const h1 = document.getElementById("visor");
const botao = document.getElementById("btn");
let count = 0;
botao.addEventListener("click", (event) => {
  h1.innerText = count += 1;
});
