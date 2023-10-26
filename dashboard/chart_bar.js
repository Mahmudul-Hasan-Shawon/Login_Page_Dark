document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart');
    let chart; // Define the chart variable outside the functions to make it accessible.

    // Data with monetary values for multiple years and months
    const data = {
      '2022': [1200, 1300, 300, 500, 1200, 300, 1000, 800, 1000, 700, 1100, 1400],
      '2023': [1500, 2200, 400, 600, 250, 350, 900, 1200, 1800, 950, 1300, 1600],
      // Add data for more years as needed
    };

    // Short month names
    const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const yearSelect = document.getElementById('yearSelect');

    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: shortMonthNames,
        datasets: [{
          label: 'Revenue',
          data: data[yearSelect.value], // Initial data based on the selected year
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            ticks: {
              color: 'white',
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)',
              borderWidth: 0.5,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white',
              callback: function (value, index, values) {
                return '$' + value;
              },
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)',
              borderWidth: 0.5,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          title: {
            color: 'white',
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        backgroundColor: 'black',
      }
    });

    // Function to update the chart when a new year is selected
    yearSelect.addEventListener('change', function () {
      const selectedYear = yearSelect.value;
      chart.data.datasets[0].data = data[selectedYear];
      chart.update(); // Update the chart with the new data
    });
  });