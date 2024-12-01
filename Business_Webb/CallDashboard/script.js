

// Create the line chart

document.addEventListener("DOMContentLoaded", function () {
    var options = {
      chart: {
        type: 'area', // Area chart
        height: 300,
        toolbar: {
          show: false, // Remove the toolbar for a cleaner look
        }
      },
      series: [
        {
          name: 'Real Calls',
          data: [30, 40, 35, 50, 49, 60, 70] // Replace with real data
        },
        {
          name: 'Fake Calls',
          data: [20, 29, 37, 36, 44, 45, 50] // Replace with real data
        }
      ],
      colors: ['#1C64F2', '#ec7063'], // Light green and red
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Replace with actual categories
        labels: {
          show: true // Hide x-axis labels
        },
        axisBorder: {
          show: false // Hide x-axis border
        },
        axisTicks: {
          show: false // Hide x-axis ticks
        }
      },
      yaxis: {
        labels: {
          show: false // Hide y-axis labels
        },
        axisBorder: {
          show: false // Hide y-axis border
        }
      },
      grid: {
        show: false // Disable grid lines
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      legend: {
        show: false,
        position: 'bottom',
        horizontalAlign: 'center'
      }
    };

    var chart = new ApexCharts(document.querySelector("#data-series-chart"), options);
    chart.render();
  });


    // Render the Donut Chart
    document.addEventListener("DOMContentLoaded", function () {
        var options = {
          chart: {
            type: 'donut',
            height: 250,
          },
          series: [685, 347], // Real calls, Fake calls (replace with your data)
          labels: ['Real Calls', 'Fake Calls'],
          
          colors: ['#2ecc71', '#e74c3c'], // Green for real, Red for fake
          legend: {
            position: 'bottom',
            horizontalAlign: 'center',
          },
          dataLabels: {
            enabled: false,
            formatter: function (val) {
              return val.toFixed(1) + '%';
            },
          },
          plotOptions: {
            pie: {
              donut: {
                size: '65%',
                labels: {
                  show: true,
                  total: {
                    show: true,
                    label: 'Calls',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    color: '#6b7280',
                    formatter: function (w) {
                      return '1,032'; // Replace with dynamic total
                    }
                  }
                }
              }
            }
          }
        };
    
        var chart = new ApexCharts(document.querySelector("#donut-chart"), options);
        chart.render();
      });


document.addEventListener("DOMContentLoaded", function () {

const options = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Real Calls",
        color: "#1A56DB",
        data: [
          { x: "May", y: 231 },
          { x: "Jun", y: 122 },
          { x: "Jul", y: 63 },
          { x: "Aug", y: 421 },
          { x: "Sep", y: 122 },
          { x: "Oct", y: 323 },
          { x: "Nov", y: 111 },
        ],
      },
      {
        name: "Fake calls",
        color: "#FDBA8C",
        data: [
        { x: "May", y: 232},
          { x: "Jun", y: 113 },
          { x: "Jul", y: 341 },
          { x: "Aug", y: 224 },
          { x: "Sep", y: 522 },
          { x: "Oct", y: 411 },
          { x: "Nov", y: 243 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: "320px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadiusApplication: "end",
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  }
  
  if(document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById("column-chart"), options);
    chart.render();
  }
  
});





function open_detailed_view() {

    document.getElementById("charts-container").style.display = "none";
    document.getElementById("detailed-view-container").style.display = "block";

}

function go_home() {

  document.getElementById("detailed-view-container").style.display = "none";
  document.getElementById("charts-container").style.display = "flex";

}


function go_list() {

  document.getElementById("charts-container").style.display = "none";
  document.getElementById("detailed-view-container").style.display = "block";

}