import { mergeDeep } from "./../common/deep_merge_function";
import { getColors } from "./../common/colors";
function chartOptions(userinput, usercoins, values) {
  var the_categories = null;
  if (usercoins) {
    the_categories = [].concat.apply([], usercoins);
  }
  var options = {
    chart: {
      id: userinput.chart_id,
      sparkline: {
        enabled: true
      },
      type: "area",
      toolbar: {
        tools: {
          download: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          selection: false,
          reset: false | "Reset"
        }
      }
    },
    colors: getColors(),
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    series: values,
    grid: {
      yaxis: {
        lines: {
          show: false
        }
      },
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    yaxis: {
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    xaxis: {
      format: "dd MMM yyyy",
      type: "datetime",
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      tooltip: {
        enabled: false
      },
      crosshairs: {
        show: false
      }
    },
    tooltip: {
      shared: true,
      x: {
        format: "dd MMM yyyy"
      },
      y: {
        formatter: function(seriesName, opt) {
          var seriesIndex = opt.seriesIndex;
          var dataPointIndex = opt.dataPointIndex;
          // if legend disabled, prevent calling data that won't exist
          if (opt.w.config.series[seriesIndex].data[dataPointIndex]) {
            var dollar = Number(
              opt.w.config.series[seriesIndex].data[dataPointIndex].y
            ).toFixed(2);
            return "$" + dollar;
          }
        }
      }
    }
  };

  if (userinput.tooltip) {
    if (userinput.tooltip === "priceonly") {
      var simpletooltip = function({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="arrow_box">' +
          "<span>$" +
          Number(series[seriesIndex][dataPointIndex]) +
          "</span>" +
          "</div>"
        );
      };
      var res = {
        custom: simpletooltip
      };
      options.tooltip = res;
    }
  }

  // if user enables axes view
  if (userinput.axes === true){
    options.chart.sparkline = false;
    options.yaxis = {
      labels: {
        style: {
          color: "#555555",
          fontSize: "12px"
        },
        formatter: function(value) {
          return "$"+value.toFixed(2);
        }
      },
      axisTicks: {
        show: true,
        color: "#ccc"
      },
      axisBorder: {
        show: true,
        color: "#ccc"
      }
    }
    options.xaxis = {
      type: "category",
      axisTicks: {
        show: true,
        color: "#ccc"
      },
      axisBorder: {
        show: true,
        color: "#ccc"
      },
      labels: {
        style: {
          colors: "#555555",
          fontSize: "12px"
        },
        formatter: function(value, timestamp, index) {
          var options = {
            month: "short",
            day: "2-digit"
          };
          return new Date(timestamp).toLocaleDateString("en-GB", options);
        }
      },
      tooltip: {
        enabled: false
      }
    }
    options.tooltip = {
      x: {
        formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
          var options = {
            year: "numeric",
            month: "short",
            day: "2-digit"
          };
          return new Date(value).toLocaleDateString("en-GB", options);
        }
      }
    }
  }
  // end of user updated axes

  if (userinput.options) {
    if (userinput.options.theme) {
      delete options.colors;
    }
    mergeDeep(options, userinput.options);
    if(userinput.options.title === true){
      options.title = { text: the_categories + " price over time" }
    }
  }

  return options;
}
export { chartOptions };
