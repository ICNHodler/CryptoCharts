import { mergeDeep } from "./../common/deep_merge_function";
import { getColors } from "./../common/colors";
function chartOptions(userinput, usercoins, values) {
  var the_categories = null;
  if (usercoins) {
    the_categories = [].concat.apply([], usercoins);
  }
  /*var max = Math.max.apply(
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
  }*/
  var options = {
    chart: {
      id: userinput.chart_title,
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
    title: {
      text: "ROI of " + the_categories + " over time",
      align: "left"
    },
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
      format: "dd MMM yyyy - HH:mm",
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
        format: "dd MMM yyyy - HH:mm"
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

  if (userinput.options) {
    if (userinput.options.theme) {
      delete options.colors;
    }
    mergeDeep(options, userinput.options);
  }

  return options;
}
export { chartOptions };
