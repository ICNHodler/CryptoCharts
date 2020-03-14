# Donut / Pie Chart
Display a breakdown of an [ICONOMI](https://www.iconomi.com/crypto-strategies?ref=WJVwG) crypto fund in the form of a pie or donut chart.

<div id="holdings" class="box">
</div>

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
  },
  loading_indicator: true
});
```

Play with demo on codepen: https://codepen.io/jesusthatsgreat/pen/joRjaW/

---

# 100% Stacked Bar Chart
Display a breakdown of one or many [ICONOMI](https://www.iconomi.com/crypto-strategies?ref=WJVwG) crypto funds in the form of a 100% stacked horizontal bar chart.

<div id="holdingsBar" class="box">
</div>

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
  },
  loading_indicator: true
});
```

Play with demo on codepen: https://codepen.io/jesusthatsgreat/pen/EzJqor/

<script>
CryptoCharts.cryptoFundPie({
  chart_id: "holdings",
  iconomi_tickers: ["BLX"],
  options: {
    chart: {
      height: 400,
      width: 700,
      type: 'donut'
    }
  },
  loading_indicator: true
});
CryptoCharts.cryptoFundBar({
  chart_id: "holdingsBar",
  iconomi_tickers: ["BLX","CAR","MOON"],
  options: {
    chart: {
      height: 400
    }
  },
  loading_indicator: true
});
</script>
