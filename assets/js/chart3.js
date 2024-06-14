const ctx3 = document.getElementById('scatter').getContext('2d')

  new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Completed Task:',
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