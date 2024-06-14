const ctx2 = document.getElementById('lineChart').getContext('2d')

  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Mobile Apps:',
        data: [12, 19, 4, 5, 20, 8, 10, 15, 11, 9],
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