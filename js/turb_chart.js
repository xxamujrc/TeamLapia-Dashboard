const tur_ctx = document.getElementById('sample4_chart').getContext('2d');

  new Chart(tur_ctx, {
    type: 'line',
    data: {
      labels: ['data_1', 'data_2', 'data_3', 'data_4', 'data_5', 'data_6'],
      datasets: [{
        label: 'Turbidity data overtime',
        data: [15, 4, 7, 12, 2, 10],
        backgroundColor: '#fefcfb',
        borderColor: 'rgb(254, 255, 253)',
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
                beginAtZero: true
            }
        }
    }
  });