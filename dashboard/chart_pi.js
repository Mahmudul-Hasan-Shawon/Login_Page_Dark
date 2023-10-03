
  // Function to create and update the chart
  function createChart(dataValues, canvasId) {
    const ctx = document.getElementById(canvasId); // Use the specified canvas ID

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Revenue',
          data: dataValues;
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'white',
          pointRadius: 5,
          tension: 0.4
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value, index, values) {
                return '$' + value;
              }
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white',
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: 'white',
            }
          },
          y: {
            ticks: {
              color: 'white',
            }
          }
        },
        elements: {
          line: {
            fill: false
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        backgroundColor: 'white'
      }
    });
  }

  // Different data values for the chart
  const dataValues1 = [1200, 1900, 300, 500, 200, 300];
  const dataValues2 = [800, 1500, 600, 400, 300, 700];

  // Create the chart with different data values and the updated canvas ID
  createChart(dataValues1, 'myNewChart'); // Call the function with the new canvas ID

