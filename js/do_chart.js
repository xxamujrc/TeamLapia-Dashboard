const do_ctx = document.getElementById('sample2_chart').getContext('2d');

  new Chart(do_ctx, {
    type: 'line',
    data: {
      labels: ['data_1', 'data_2', 'data_3', 'data_4', 'data_5', 'data_6'],
      datasets: [{
        label: 'D.O. data overtime',
        data: [10, 9, 3, 5, 2, 3],
        backgroundColor: '#121413',
        borderColor: 'rgb(18, 20, 19)',
        tension: 0.3,
        borderWidth: 3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#121413',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#121413'
          },
        },
          y: {
            ticks:{
              color: '#121413'
            },
              beginAtZero: true
          }
      }
  }
  });