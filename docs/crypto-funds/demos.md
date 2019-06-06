# Donut / Pie Chart
Display a breakdown of an ICONOMI crypto fund in the form of a pie or donut chart.
```html
<div id="holdings"></div>
```
```js
CryptoCharts.cryptoFundPie({
  chart_id: "holdings",
  iconomi_tickers: ["BLX"],
  options: {
    chart: {
      height: 400,
      width: 700,
      type: 'donut' // or 'pie'
    }
  }
});
```

<iframe height="500" style="width: 100%;" scrolling="no" title="ROI of crypto assets over time" src="//codepen.io/jesusthatsgreat/embed/preview/joRjaW/?height=500&theme-id=37041&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>

---

# 100% Stacked Bar Chart
Display a breakdown of one or many ICONOMI crypto funds in the form of a 100% stacked horizontal bar chart.
```html
<div id="holdings"></div>
```
```js
CryptoCharts.cryptoFundBar({
  chart_id: "holdings",
  iconomi_tickers: ["BLX","CAR","MOON"],
  options: {
    chart: {
      height: 400
    }
  }
});
```
<iframe height="600" style="width: 100%;" scrolling="no" title="ICONOMI Crypto Fund Stacked Bar Chart" src="//codepen.io/jesusthatsgreat/embed/preview/EzJqor/?height=600&theme-id=37041&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
