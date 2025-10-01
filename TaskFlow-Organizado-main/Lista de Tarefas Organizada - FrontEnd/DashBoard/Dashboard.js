const form = document.getElementById('form-tarefa');
const input = document.getElementById('nova-tarefa');
const lista = document.getElementById('lista-tarefas');
const card = document.querySelector('.card');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const texto = input.value.trim();
  if (!texto) return;

  const li = document.createElement('li');
  li.textContent = texto;

  const btnRemover = document.createElement('button');
  btnRemover.textContent = '✖';
  btnRemover.className = 'btn cancelar';
  btnRemover.style.marginLeft = '12px';
  btnRemover.style.fontSize = '0.9rem';
  btnRemover.onclick = () => li.remove();

  li.appendChild(btnRemover);
  lista.appendChild(li);

  input.value = '';
  input.focus();

  card.style.transform = 'scale(1.04)';
  setTimeout(() => card.style.transform = '', 200);
});

document.getElementById('btn-adicionar').addEventListener('click', function() {
  form.requestSubmit();
});