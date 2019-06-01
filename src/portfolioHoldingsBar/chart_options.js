import { mergeDeep } from "./../common/deep_merge_function";
import { getColors } from "./../common/colors";
function chartOptions(userinput, usercoins, values) {
  var the_categories = null;
  if (usercoins) {
    the_categories = [].concat.apply([], usercoins);
  }
  var vals = values[0].rebalanced_coin_weights;
  var currentvals = values[0].current_coin_weights;
  var alltickers = values[0].coin_names;

  var options = {
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "70%",
        barHeight: "70%"
      }
    },
    yaxis: {
      show: true
    },
    xaxis: {
      labels: {
        show: true,
        formatter: function(value, timestamp, index) {
          return value + "%";
        }
      },
      tickAmount: 5,
      max: 100,
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true
      }
    },
    chart: {
      type: "bar",
      stacked: true,
      //height: 300,
      stackType: "100%",
      toolbar: {
        show: false
      }
    },
    grid: {
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    series: vals,
    labels: userinput.iconomi_tickers,
    legend: {
      position: "top",
      //offsetY: 25,
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function(value, { seriesIndex, dataPointIndex, w }) {
        return currentvals[seriesIndex].name; // + " (" + value.toFixed(2) + "%)"
      },
      dropShadow: {
        enabled: true
      }
    },
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        var rebalweight = series[seriesIndex][dataPointIndex];
        var curweight = currentvals[seriesIndex].data[dataPointIndex];
        var coinname = alltickers.find(
          x => x.cointicker === currentvals[seriesIndex].name
        );
        return (
          '<div class="arrow_box">' +
          "<span>" +
          coinname.name +
          " (" +
          coinname.cointicker +
          ")<br><span class='tooltip-weights'> Current: " +
          (curweight * 100).toFixed(2) +
          "%<br> Target: " +
          (rebalweight * 100).toFixed(2) +
          "%</span></span></div>"
        );
      }
    },
    colors: getColors(),
    title: {
      text: the_categories.join(", ") + " Portfolios",
      align: "center",
      style: {
        fontSize: "20px"
      }
    },
    fill: {
      opacity: 1,
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.35,
        gradientToColors: undefined,
        inverseColors: false,
        opacityFrom: 0.95,
        opacityTo: 0.95,
        stops: [95, 0, 100]
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
