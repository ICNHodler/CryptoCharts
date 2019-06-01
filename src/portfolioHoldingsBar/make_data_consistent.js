import { getPortfolioHoldingsData } from "./../common/iconomi_portfolio_structure";

async function makeDataConsistent(usercoins, customdata) {
  var get_final_result = await getPortfolioHoldingsData(usercoins);
  var alldata = await get_final_result;
  var formattedArray = [];
  var finalarr = [];
  var coinsonly = [];
  alldata.forEach(function(portfolio) {
    var arr = [];
    var thare = portfolio.data;
    thare.forEach(function(subitem) {
      arr.push({
        portfolio: portfolio.name,
        assetName: subitem.assetName,
        assetTicker: subitem.assetTicker,
        rebalanced: subitem.rebalancedWeight,
        weight: subitem.targetWeight
      });
      coinsonly.push({
        name: subitem.assetName,
        cointicker: subitem.assetTicker
      });
    });
    formattedArray.push(arr);
  });

  formattedArray.forEach(function(el, index) {
    coinsonly.forEach(function(ticker) {
      var found = el.some(item => item.assetTicker === ticker.cointicker);
      if (!found) {
        // if coin isn't in portfolio, give it a zero value
        var obj = {
          portfolio: el[0].portfolio,
          assetName: ticker.cointicker,
          assetTicker: ticker.cointicker,
          rebalanced: 0,
          weight: 0
        };
        formattedArray[index].push(obj);
      }
    });
  });
  var combinedArray = formattedArray.flat();
  var rebalanced_coin_arr = [];
  var current_coin_arr = [];

  Object.keys(combinedArray).forEach(function(item, index) {
    var coindetails = combinedArray[item];
    var rebal_nums = coindetails.assetTicker;
    var current_nums = coindetails.assetTicker;
    rebalanced_coin_arr[rebal_nums] = rebalanced_coin_arr[rebal_nums] || [];
    rebalanced_coin_arr[rebal_nums].push(coindetails.rebalanced);
    current_coin_arr[current_nums] = current_coin_arr[current_nums] || [];
    current_coin_arr[current_nums].push(coindetails.weight);
  });

  function formatChartData(payload) {
    var arr = [];
    Object.keys(payload).forEach(function(item, index) {
      var obj = {};
      obj["name"] = item;
      obj["data"] = payload[item];
      arr.push(obj);
    });
    return arr;
  }

  finalarr.push({
    rebalanced_coin_weights: formatChartData(rebalanced_coin_arr),
    current_coin_weights: formatChartData(current_coin_arr),
    coin_names: coinsonly
  });

  return finalarr;
}
export { makeDataConsistent };
