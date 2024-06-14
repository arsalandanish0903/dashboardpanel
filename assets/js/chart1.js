// const { color } = require("chart.js/helpers");

const ctx = document.getElementById('myChart').getContext('2d')

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [{
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3, 8],
        borderWidth: 1,
        backgroundColor: [
            '#008997'
        ],
        borderColor: '#008997',
      }]
    },
    options: {
      responsive: true
    }
  });