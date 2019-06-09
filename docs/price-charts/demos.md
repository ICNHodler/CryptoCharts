# Sparkline Chart
No labels, legend or values on x & y axis, just a simple shape with price on hover over data points.

<div id="priceSpark" class="box">
  <div class="loading"></div>
</div>
<script>
CryptoCharts.priceHistory({
  chart_id: "priceSpark",
  iconomi_tickers: ["BLX"],
  last_days: 30,
  options: {
    chart: {
      events: {
        mounted: function(chartContext, config) {
          removeFadeOut(document.querySelectorAll("#priceSpark .loading")[0], 500);
        }
      }
    }
  }
});
</script>

```html
<div id="priceSpark"></div>
```

```js
CryptoCharts.priceHistory({
  chart_id: "priceSpark",
  iconomi_tickers: ["BLX"],
  last_days: 30
});
```

Play with demo on codepen: https://codepen.io/jesusthatsgreat/pen/OYGqBJ/
