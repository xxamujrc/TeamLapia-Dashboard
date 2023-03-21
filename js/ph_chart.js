const ph_ctx = document.getElementById('sample1_chart').getContext('2d');

  new Chart(ph_ctx, {
    type: 'line',
    data: {
      labels: ['data_1', 'data_2', 'data_3', 'data_4', 'data_5', 'data_6'],
      color: '#fefcfb',
      datasets: [{
        label: 'pH',
        backgroundColor: '#fefcfb',
        fontColor: '#fefcfb',
        data: [12, 14, 3, 5, 2, 3],
        borderColor: '#fefcfb',
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
            color: '#fefcfb',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#fefcfb'
          },
        },
        y: {
          ticks:{
            color: '#fefcfb'
          },
          beginAtZero: true,
          min: 0,
          max: 15,
        }
      }
  }
  });