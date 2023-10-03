document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('chart_line');

  // Data with monetary values
  const dataValues = [1200, 1900, 300, 500, 200, 300];

  new Chart(ctx, {
    type: 'line', // Change the chart type to line
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Month names as labels
      datasets: [
        {
          label: 'Revenue', // Label for the dataset
          data: dataValues, // Monetary data values
          borderColor: 'rgba(204, 65, 255,1)', // Line color (e.g., Red)
          borderWidth: 2, // Line width
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) {
              // This case happens on initial load or resize.
              return null;
            }
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(129, 66, 255, 1.2)'); // Fill color below the line
            gradient.addColorStop(1, 'rgba(129, 66, 255, 0)'); // Transparent color at the top
            // gradient.addColorStop(0, 'rgba(191, 159, 255, 01)'); // Fill color below the line
            // gradient.addColorStop(1, 'rgba(255, 99, 132, 0)'); // Transparent color at the top
            return gradient;
          },
          fill: 'start', // Fill from the start of the line
          pointBackgroundColor: 'white', // Point background color
          pointRadius: 5, // Point radius
          tension: 0.4, // Set the line tension for curve shape
        },
      ],
    },
    options: {
      scales: {
        x: {
          ticks: {
            color: 'white', // Set text color to white for x-axis labels
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: 'white', // Set text color to white for y-axis labels
            callback: function (value, index, values) {
              // Add a dollar symbol ($) before each tick value
              return '$' + value;
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'white', // Set text color to white for legend labels
          },
        },
      },
      elements: {
        title: {
          text: 'Revenue Curve Chart', // Chart title
          color: 'white', // Set text color to white for chart title
          display: true, // Display the chart title
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: 'white', // Set background color of the entire chart to white
    },
  });
});

