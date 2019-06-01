async function getPortfolioPriceData(tickers, userinput) {
  var result = [];
  var startdate = Math.round(new Date().getTime() / 1000) - 2592000; //minus 30 days
  var enddate = Math.round(new Date().getTime() / 1000);
  if (userinput.from) {
    startdate = userinput.from;
  }
  if (userinput.to) {
    enddate = userinput.to;
  }
  if (userinput.last_days) {
    var daysbyseconds = userinput.last_days * 86400;
    startdate = enddate - daysbyseconds;
  }
  for (let i = 0; i < tickers.length; i++) {
    var response = await fetch(
      "https://api.iconomi.com/v1/daa/" +
        tickers[i] +
        "/pricehistory?from=" +
        startdate +
        "&to=" +
        enddate
    ).catch(error => console.error("Error:", error));
    var data = await response.json();
    var theresult = filteredData(data);
    result.push({ name: tickers[i], data: theresult });
  }
  return result;

  // function to filter daily data only because ICONOMI return random time intervals
  function isStartOfDay(epoch) {
    var inputTime = new Date(epoch * 1000).toISOString();
    var startOfDay = new Date(inputTime).setUTCHours(0, 0, 0, 0);
    var epochStartOfDay = Math.round(startOfDay / 1000);
    var result = false;
    if (epoch === epochStartOfDay) {
      result = true;
    }
    return result;
  }

  function filteredData(data) {
    var arr = [];
    data.values.forEach(function(item) {
      var dailyValue = isStartOfDay(Number(item.x));
      if (dailyValue) {
        arr.push(item);
      }
    });
    return arr;
  }
}
export { getPortfolioPriceData };
