import { getPortfolioHoldingsData } from "./../common/iconomi_portfolio_structure";

async function makeDataConsistent(usercoins, customdata) {
  var get_final_result = await getPortfolioHoldingsData(usercoins);
  var alldata = await get_final_result;
  var formattedArray = [];
  alldata.forEach(function(portfolio) {
    var names = [];
    var weights = [];
    var ticks = [];
    var rebal = [];
    var thare = portfolio.data;
    thare.forEach(function(subitem) {
      weights.push(subitem.targetWeight);
      rebal.push(subitem.rebalancedWeight);
      names.push(subitem.assetName);
      ticks.push(subitem.assetTicker);
    });

    formattedArray.push({
      series: weights,
      labels: names,
      tickers: ticks,
      rebalanced: rebal
    });
  });
  return formattedArray;
}
export { makeDataConsistent };
