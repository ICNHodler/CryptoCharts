import { mergeDeep } from "./../common/deep_merge_function";
import { getColors } from "./../common/colors";
function chartOptions(userinput, usercoins, values) {
  var the_categories = null;
  if (usercoins) {
    the_categories = [].concat.apply([], usercoins);
  }
  var vals = values[0].series;
  var rebal = values[0].rebalanced;
  var fullnames = values[0].labels;
  var tickers = values[0].tickers;
  var options = {
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              color: "#000000",
              offsetY: -15
            },
            value: {
              show: true,
              color: "#000000",
              offsetY: -5,
              formatter: function(value, { seriesIndex }) {
                return (value * 100).toFixed(2) + "%";
              }
            },
            total: {
              show: true,
              label: "Total " + the_categories + " Assets:",
              formatter: function(w) {
                return vals.length;
              }
            }
          }
        }
      }
    },
    chart: {
      type: "donut"
    },
    series: vals,
    labels: fullnames,
    legend: {
      position: "right",
      offsetY: 25,
      horizontalAlign: "left"
    },
    dataLabels: {
      enabled: true,
      formatter: function(value, { seriesIndex, dataPointIndex, w }) {
        return tickers[seriesIndex]; // + ": " + value.toFixed(1) + "%";
      },
      dropShadow: {
        enabled: true
      }
    },
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="arrow_box">' +
          "<span>" +
          fullnames[seriesIndex] +
          " (" +
          tickers[seriesIndex] +
          ")<br><span class='tooltip-weights'> Current: " +
          (series[seriesIndex] * 100).toFixed(2) +
          "%<br> Target: " +
          (rebal[seriesIndex] * 100).toFixed(2) +
          "%</span></span></div>"
        );
      }
    },
    colors: getColors(),
    title: {
      text: the_categories + " Crypto Fund Breakdown",
      align: "center",
      style: {
        fontSize: "20px"
      }
    }
  };

  if (userinput.options) {
    if (userinput.options.theme) {
      delete options.colors;
    }
    mergeDeep(options, userinput.options);
  }

  return options;
}
export { chartOptions };
