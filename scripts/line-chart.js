const lineElement = document.getElementById('line-chart').getContext('2d');

const lineLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const lineData = {
  labels: lineLabels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const lineConfig = {
  type: 'line',
  data: lineData,
};

const lineChart = new Chart(
  lineElement,
  lineConfig
);




