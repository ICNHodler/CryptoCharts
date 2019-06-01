async function getCryptoCompareData(tickers, ccapikey, userinput) {
  var result = [];
  function ccfunc(data) {
    var result = [];
    data.forEach(function(portfolio) {
      var obj = {};
      obj["x"] = portfolio.time;
      obj["y"] = portfolio.close;
      result.push(obj);
    });
    return result;
  }
  var lastdays = 30;
  if (userinput.last_days) {
    lastdays = userinput.last_days;
  }
  for (let i = 0; i < tickers.length; i++) {
    var obj = {};
    var url =
      "https://min-api.cryptocompare.com/data/histoday?fsym=" +
      tickers[i] +
      "&tsym=USD&limit=" +
      Number(lastdays);
    if (ccapikey) {
      url = url + "&api_key=" + ccapikey;
    }

    var response = await fetch(url).catch(error =>
      console.error("Error:", error)
    );
    var res = await response.json();
    var tickerhistory = res.Data.slice(1);
    obj["name"] = tickers[i].toString();
    obj["data"] = ccfunc(tickerhistory);
    result.push(obj);
  }
  return result;
}
export { getCryptoCompareData };
