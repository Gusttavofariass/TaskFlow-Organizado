document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.home-container');
  container.classList.add('fade-in');

  const greeting = document.createElement('p');
  const hour = new Date().getHours();

  greeting.style.fontSize = '22px';
  greeting.style.marginBottom = '20px';
  document.querySelector('.home-container').prepend(greeting);

  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.05)';
      btn.style.transition = 'all 0.3s ease';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
    });
  });
});