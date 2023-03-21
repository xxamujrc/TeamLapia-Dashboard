const temp_ctx = document.getElementById('sample3_chart').getContext('2d');

  new Chart(temp_ctx, {
    data: {
      labels: ['data_1', 'data_2', 'data_3', 'data_4', 'data_5', 'data_6'],
      datasets: [{
        label: 'Temperature data overtime',
        data: [10, 9, 3, 5, 2, 3],
        tension: 0.3,
        backgroundColor: '#121413',
        borderColor: 'rgb(18, 20, 19)',
        borderWidth: 3
      }]
    },
    type: 'line',
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
//   window.setInterval(realTime,2000);

//   function realTime() {
//       var now = new Date();
//       now = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
//       var value = Math.floor(Math.random()*1000);
//       data.labels.push(now);
//       data.datasets[0].data.push(value);

//       sample3_chart.update()
//   }