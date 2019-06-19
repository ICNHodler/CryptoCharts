import { chartOptions } from "./chart_options";
import ApexCharts from "apexcharts";
import { makeDataConsistent } from "./make_data_consistent";
import { loading } from "./../common/loading";
import { removeFadeOut } from "./../common/utils";

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
  if (userinput.loading_indicator){
    loading(chartid, userinput);
  }
  var alldata = await makeDataConsistent(iticks, customdata);
  var chart = new ApexCharts(
    document.querySelector("#" + chartid),
    chartOptions(userinput, alltickers, alldata)
  );
  chart.render();
  //chart rendered so we can remove loading icon
  if (userinput.loading_indicator){
    removeFadeOut(document.querySelector(`.${chartid}.cryptochart_loading`), 2000);
  }
}

export { portfolioHoldingsBar };
