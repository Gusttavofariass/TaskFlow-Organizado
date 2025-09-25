const sidebar = document.getElementById("sidebar");
const abrirBtn = document.getElementById("abrir-sidebar");
const fecharBtn = document.getElementById("fechar-sidebar");

abrirBtn.addEventListener("click", () => {
  sidebar.classList.add("ativo");
});

fecharBtn.addEventListener("click", () => {
  sidebar.classList.remove("ativo");
});