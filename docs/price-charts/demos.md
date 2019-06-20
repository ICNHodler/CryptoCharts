# Sparkline Chart
No labels, legend or values on x & y axis, just a simple shape with price on hover over data points.

<div id="priceSpark" class="box">
</div>
<script>
CryptoCharts.priceHistory({
  chart_id: "priceSpark",
  iconomi_tickers: ["BLX"],
  last_days: 30,
  loading_indicator: true
});
CryptoCharts.priceHistory({
  chart_id: "priceFull",
  iconomi_tickers: ["BLX"],
  last_days: 30,
  axes: true,
  loading_indicator: true
});
</script>

```html
<div id="priceSpark"></div>
```

```js
CryptoCharts.priceHistory({
  chart_id: "priceSpark",
  iconomi_tickers: ["BLX"],
  last_days: 30,
  loading_indicator: true
});
```

Play with demo on codepen: https://codepen.io/jesusthatsgreat/pen/OYGqBJ/

---

# Regular Price Chart
Price chart with date on X axis and price in USD on Y axis.

<div id="priceFull" class="box">
</div>

```html
<div id="priceFull"></div>
```

```js
CryptoCharts.priceHistory({
  chart_id: "priceSpark",
  iconomi_tickers: ["BLX"],
  last_days: 30,
  axes: true,
  loading_indicator: true
});
```

Play with demo on codepen: https://codepen.io/jesusthatsgreat/pen/BgQXQM
