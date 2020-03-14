# Heatmap
Display a calendar heatmap of the daily % gain/loss of any [ICONOMI](https://www.iconomi.com/crypto-strategies?ref=WJVwG) crypto fund or CryptoCompare asset.

<div id="myheatmap" class="box">
</div>
<script>
CryptoCharts.priceHeatmap({
  chart_id: "myheatmap",
  iconomi_tickers: ["BLX"],
  last_days: 90,
  loading_indicator: true
});
</script>

```html
<div id="myheatmap"></div>
```

```js
CryptoCharts.priceHeatmap({
  chart_id: "myheatmap",
  iconomi_tickers: ["BLX"],
  last_days: 90,
  loading_indicator: true
});
```

Play with demo on codepen: https://codepen.io/jesusthatsgreat/pen/NVQBxB/
