async function getPortfolioHoldingsData(tickers) {
  var result = [];
  for (let i = 0; i < tickers.length; i++) {
    var response = await fetch(
      "https://api.iconomi.com/v1/daa/" + tickers[i] + "/structure"
    ).catch(error => console.error("Error:", error));
    var data = await response.json();
    result.push({ name: tickers[i], data: data.values });
  }
  return result;
}
export { getPortfolioHoldingsData };
