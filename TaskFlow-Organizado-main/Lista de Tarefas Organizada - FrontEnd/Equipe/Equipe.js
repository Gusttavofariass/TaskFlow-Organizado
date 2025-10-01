document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  });
  
  
  document.getElementById("esqueciSenha").addEventListener("click", function(event) {
    event.preventDefault();  
    window.location.href = "RecuperarSenha.html";  
  });