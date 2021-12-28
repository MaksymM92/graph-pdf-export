const pieElement = document.getElementById('pie-chart').getContext('2d');

const pieChart = new Chart(pieElement, {
  type: 'pie',
  data: {
    labels: ['Value 1', 'Value 2', 'Value 3'],
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false
  },
});
