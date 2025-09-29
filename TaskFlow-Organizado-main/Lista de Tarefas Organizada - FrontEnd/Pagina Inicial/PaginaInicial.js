document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.home-container');
  container.classList.add('fade-in');

  const greeting = document.createElement('p');
  const hour = new Date().getHours();

  let message;
  if (hour < 12) {
    message = "Bom dia!";
  } else if (hour < 18) {
    message = "Boa tarde!";
  } else {
    message = "Boa noite!";
  }

  greeting.textContent = message;
  greeting.style.fontSize = '22px';
  greeting.style.marginBottom = '20px';
  greeting.style.fontWeight = '500';
  container.insertBefore(greeting, container.children[1]);
});