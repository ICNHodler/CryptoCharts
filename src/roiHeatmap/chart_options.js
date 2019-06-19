import { mergeDeep } from "./../common/deep_merge_function";
function chartOptions(userinput, usercoins, values) {
  var the_categories = null;
  if (usercoins) {
    the_categories = [].concat.apply([], usercoins);
  }
  var oneonly = values[0];

  var minrange = -1;
  var maxrange = 1;
  if (oneonly.min && oneonly.max) {
    if (oneonly.min < minrange) {
      minrange = Math.round(oneonly.min);
    }
    if (oneonly.max > maxrange) {
      maxrange = Math.round(oneonly.max);
    }
  }

  function dayOfWeekAsString(dayIndex) {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayIndex];
  }
  function monthAsString(monthIndex) {
    return [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ][monthIndex];
  }

  function groupByDays(data) {
    // this gives an object with dates as keys
    var groups = data.reduce((groups, game) => {
      var thed = new Date(game.x).getDay();
      const date = thed;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(game);
      return groups;
    }, {});

    var arrayLengths = [];
    Object.keys(groups).forEach(function(el) {
      arrayLengths.push(groups[el].length);
    });

    var firstDayIndex = new Date(oneonly.data[0].x).getUTCDay();

    Object.keys(groups).forEach(function(el) {
      if (el < firstDayIndex) {
        var firstItemTime = groups[el][0].x;
        var newtime = firstItemTime - 604800000;
        groups[el].unshift({
          x: newtime,
          y: null
        });
      }
    });

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map(date => {
      return {
        name: dayOfWeekAsString(date),
        data: groups[date]
      };
    });

    return groupArrays.reverse();
  }

  var newdata = groupByDays(oneonly.data);

  var options = {
    chart: {
      id: userinput.chart_id,
      height: 200,
      animations: {
        enabled: true
      },
      type: "heatmap",
      zoom: {
        enabled: false
      },
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
    legend: {
      position: "top",
      markers: {
        radius: 0,
        offsetY: 0
      },
      onItemClick: {
        toggleDataSeries: true
      }
    },
    dataLabels: {
      enabled: false
    },
    series: newdata,
    grid: {
      position: "back",
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    yaxis: {
      show: true,
      labels: {
        formatter: function(val, index) {
          if (index % 2 !== 0) {
            return val;
          }
        },
        style: {
          color: "#555555",
          fontSize: "11px"
        }
      }
    },
    xaxis: {
      type: "category",
      labels: {
        show: true,
        offsetY: -4,
        style: {
          colors: "#555555",
          fontSize: "11px"
        },
        showDuplicates: true,
        formatter: function(value, timestamp, index) {
          return (
            monthAsString(new Date(timestamp).getMonth()) +
            " " +
            new Date(timestamp)
              .getUTCFullYear()
              .toString()
              .substr(-2)
          );
        }
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      tooltip: {
        enabled: false,
        formatter: function(value) {
          return monthAsString(new Date(value).getMonth());
        }
      }
    },
    /*yaxis: {
      format: "dd MMM yyyy - HH:mm",
      type: "datetime"
      //categories: values[];
    },*/
    stroke: {
      width: 0
    },
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        if (!w.config.series[seriesIndex].data[dataPointIndex].y) {
          return null;
        }
        var date = new Date(
          w.config.series[seriesIndex].data[dataPointIndex].x
        );
        var price =
          "$" +
          w.config.series[seriesIndex].data[dataPointIndex].price.toFixed(2);
        var dateoptions = {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric"
        };
        var formattedDate = date.toLocaleDateString("en-GB", dateoptions);
        var percentresult =
          "+" + w.config.series[seriesIndex].data[dataPointIndex].change + "%";
        var percentclass = "pc_positive";
        if (series[seriesIndex][dataPointIndex] < 0) {
          percentresult =
            w.config.series[seriesIndex].data[dataPointIndex].change + "%";
          percentclass = "pc_negative";
        }
        return (
          '<div class="arrow_box">' +
          "<span class='tooltip-heatmap-price'>" +
          price +
          "</span>" +
          "<span class=" +
          percentclass +
          ">" +
          percentresult +
          "</span>" +
          "<br>" +
          "<span class='tooltip-heatmap-date'>" +
          formattedDate +
          "</span></span></div>"
        );
      }
    },
    plotOptions: {
      heatmap: {
        reverseNegativeShade: true,
        radius: 0,
        shadeIntensity: 0.5,
        enableShades: true,
        colorScale: {
          ranges: [
            {
              from: minrange * 1000,
              to: -1000.0,
              color: "#FF0000",
              name: "< -1%"
            },
            {
              from: -1000.0,
              to: 1000.0,
              color: "#cccccc",
              name: "-1% to 1%"
            },
            {
              from: 1000.0,
              to: maxrange * 1000,
              color: "#00A100",
              name: ">1%"
            }
          ],
          max: maxrange * 1000,
          min: minrange * 1000
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
      options.title = { text: "Daily % change of " + the_categories + " over time"}
    }
  }

  return options;
}
export { chartOptions };
