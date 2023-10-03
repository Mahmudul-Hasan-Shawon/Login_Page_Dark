const ctx = document.getElementById('myChart');
                  // Data with monetary values
                  const dataValues = [1200, 1900, 300, 500, 200, 300];
                  new Chart(ctx, {
                    type: 'bar',
                    data: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Month names as labels
                      datasets: [{
                        label: 'Revenue', // Label for the dataset
                        data: dataValues, // Monetary data values
                        backgroundColor: [
                          '#FF6384', // Red (hex code)
                          '#36A2EB', // Blue (hex code)
                          '#FFCE56', // Yellow (hex code)
                          '#4BC0C0', // Green (hex code)
                          '#9966FF', // Purple (hex code)
                          '#FF9F40' // Orange (hex code)
                        ],
                        borderWidth: 1
                      }]
                    },
                    options: {
                      scales: {
                        x: {
                          ticks: {
                            color: 'white', // Set text color to white for x-axis labels
                          }
                        },
                        y: {
                          beginAtZero: true,
                          ticks: {
                            color: 'white', // Set text color to white for y-axis labels
                            callback: function(value, index, values) {
                              // Add a dollar symbol ($) before each tick value
                              return '$' + value;
                            }
                          }
                        }
                      },
                      plugins: {
                        legend: {
                          labels: {
                            color: 'white' // Set text color to white for legend labels
                          }
                        }
                      },
                      elements: {
                        title: {
                          color: 'white' // Set text color to white for chart title
                        }
                      }
                    }
                  });