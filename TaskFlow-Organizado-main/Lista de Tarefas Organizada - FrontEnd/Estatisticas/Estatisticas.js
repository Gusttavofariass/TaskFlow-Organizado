const ctx = document.getElementById('grafico');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Concluídas', 'Pendentes', 'Atrasadas'],
    datasets: [{
      label: 'Tarefas',
      data: [12, 7, 3],
      backgroundColor: ['#228B22', '#FFD700', '#DC143C'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#fff' }
      }
    }
  }
});