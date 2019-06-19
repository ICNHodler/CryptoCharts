import { mergeDeep } from "./../common/deep_merge_function";
import { getColors } from "./../common/colors";
function chartOptions(userinput, usercoins, values) {
  var the_categories = null;
  if (usercoins) {
    the_categories = [].concat.apply([], usercoins);
  }
  var max = Math.max.apply(
    Math,
    values.map(function(o) {
      return o.max;
    })
  );
  var min = Math.min.apply(
    Math,
    values.map(function(o) {
      return o.min;
    })
  );
  var minval = 0;
  var maxval = 0;
  if (min < 0) {
    minval = Math.ceil(min) - 1;
  }
  if (max > 0) {
    maxval = Math.ceil(max) + 1;
  }
  var options = {
    chart: {
      id: userinput.chart_id,
      height: 500,
      type: "area",
      toolbar: {
        show: false
      }
    },
    colors: getColors(),
    annotations: {
      position: "back",
      yaxis: [
        {
          y: 0,
          y2: minval,
          borderColor: "red",
          fillColor: "red",
          opacity: 0.15,
          label: {
            borderWidth: 0,
            style: {
              fontSize: "1px",
              color: "#333",
              background: "transparent",
              cssClass: "hidden"
            },
            text: "."
          }
        }
      ]
    },
    legend: {
      position: "top"
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
      min: minval,
      max: maxval,
      labels: {
        style: {
          color: "#555555",
          fontSize: "12px"
        },
        formatter: function(value) {
          return value.toFixed(2) + "%";
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
    },
    xaxis: {
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
    },
    tooltip: {
      shared: true,
      x: {
        formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
          var options = {
            year: "numeric",
            month: "short",
            day: "2-digit"
          };
          return new Date(value).toLocaleDateString("en-GB", options);
        }
      },
      y: {
        formatter: function(seriesName, opt) {
          var seriesIndex = opt.seriesIndex;
          var dataPointIndex = opt.dataPointIndex;
          // if legend disabled, prevent calling data that won't exist
          if (opt.w.config.series[seriesIndex].data[dataPointIndex]) {
            var pc =
              opt.w.config.series[seriesIndex].data[dataPointIndex].y.toFixed(
                2
              ) + "%";
            var dollar = opt.w.config.series[seriesIndex].data[
              dataPointIndex
            ].price.toFixed(2);
            return pc + " / $" + dollar;
          }
        }
      }
    }
  };

  if (userinput.options) {
    if (userinput.options.theme) {
      delete options.colors;
    }
    mergeDeep(options, userinput.options);
    if(userinput.options.title === true){
      options.title = { text: "ROI of " + the_categories + " over time"}
    }
  }

  return options;
}
export { chartOptions };
