# ROI Comparison Chart
Chart the % ROI of one or many [ICONOMI](https://www.iconomi.com/crypto-strategies?ref=WJVwG) crypto funds or digital assets over a set period of time.

<div id="roichart" class="box">
</div>
<script>
CryptoCharts.roiComparison({
  chart_id: "roichart",
  iconomi_tickers: ["BLX", "CAR"],
  cryptocompare_tickers: ["BTC", "ETH"],
  last_days: 14,
  loading_indicator: true
});
</script>

```html
<div id="roichart"></div>
```
```js
CryptoCharts.roiComparison({
  chart_id: "roichart",
  iconomi_tickers: ["BLX", "CAR"],
  cryptocompare_tickers: ["BTC", "ETH"],
  last_days: 14,
  loading_indicator: true
});
```

Play with demo on codepen: https://codepen.io/jesusthatsgreat/pen/YbMbPp/
