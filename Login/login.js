document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const loginInput = document.getElementById('mail').value;
  const senhaInput = document.getElementById('senha').value;

  console.log("Email:", loginInput);
  console.log("Senha:", senhaInput);


  if (loginInput === "admin@gmail.com" && senhaInput === "admin") {
    window.location.href = "../Pagina Inicial/PaginaInicial.html";
  } else {
    alert("Usuário ou senha incorretos");
  }
});


const esqueciSenhaBtn = document.getElementById("esqueciSenha");
if (esqueciSenhaBtn) {
  esqueciSenhaBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "RecuperarSenha.html";
  });
}
