window.jsPDF = window.jspdf.jsPDF;

const exportChart = (id, dimensions) => {
  const chartEl = document.getElementById(id);
  const image = chartEl.toDataURL('image/png', 1.0);

  const pdf = new jsPDF('landscape');
  pdf.addImage(image, 'PNG', ...dimensions);
  pdf.save('chart.pdf');
}
