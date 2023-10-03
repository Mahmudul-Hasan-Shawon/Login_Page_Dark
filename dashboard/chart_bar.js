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
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
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