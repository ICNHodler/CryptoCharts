import { chartOptions } from "./chart_options";
import ApexCharts from "apexcharts";
import { makeDataConsistent } from "./make_data_consistent";

async function portfolioHoldingsBar(userinput) {
  var iticks = null;
  var alltickers = [];
  var customdata = null;
  var chartid = null;
  if (userinput.chart_id) {
    chartid = userinput.chart_id;
  }
  if (userinput.iconomi_tickers) {
    iticks = userinput.iconomi_tickers;
    alltickers.push(iticks);
  }
  if (userinput.custom_data) {
    customdata = userinput.custom_data;
    var arr = [];
    customdata.forEach(function(el) {
      arr.push(el.name);
    });
    alltickers.push(arr);
  }
  var alldata = await makeDataConsistent(iticks, customdata);
  var chart = new ApexCharts(
    document.querySelector("#" + chartid),
    chartOptions(userinput, alltickers, alldata)
  );
  chart.render();
}

export { portfolioHoldingsBar };
