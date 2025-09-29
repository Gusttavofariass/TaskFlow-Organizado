//volta pra pagina de login
document.getElementById("recuperarform").addEventListener("submit", function(event) {
    event.preventDefault(); 
  });
  
  
  document.getElementById("voltarLogin").addEventListener("click", function(event) {
    event.preventDefault();  
    window.location.href = "Pagina De Login.html";  
  });
  
  //redireciona pro redefinir senha
  document.getElementById("recuperarform").addEventListener("submit", function(event) {
    event.preventDefault(); 
  });
  
  
  document.getElementById("enviarEmailbnt").addEventListener("click", function(event) {
    event.preventDefault();  
    window.location.href = "Redifinir senha.html";  
  });