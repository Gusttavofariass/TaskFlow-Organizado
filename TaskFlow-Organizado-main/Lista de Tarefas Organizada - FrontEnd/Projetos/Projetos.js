// Seleção dos elementos
const modal = document.getElementById('modal');
const openButtons = document.querySelectorAll('.view-details');
const closeButton = document.querySelector('.close');

// Abrir modal ao clicar em "Ver Detalhes"
openButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

// Fechar modal ao clicar no "x"
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
})