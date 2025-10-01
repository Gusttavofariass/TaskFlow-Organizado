const modal = document.getElementById('modal');
const openButtons = document.querySelectorAll('.view-details');
const closeButton = document.querySelector('.close');

openButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
})