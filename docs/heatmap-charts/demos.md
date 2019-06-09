# Heatmap
Display a calendar heatmap of the daily % gain/loss of any ICONOMI crypto fund or CryptoCompare asset.

<div id="myheatmap" class="box">
  <div class="loading"></div>
</div>
<script>
CryptoCharts.priceHeatmap({
  chart_id: "myheatmap",
  iconomi_tickers: ["BLX"],
  last_days: 90,
  options: {
    chart: {
      events: {
        mounted: function(chartContext, config) {
          removeFadeOut(document.querySelectorAll("#myheatmap .loading")[0], 500);
        }
      }
    }
  }
});
</script>

```html
<div id="myheatmap"></div>
```

```js
CryptoCharts.priceHeatmap({
  chart_id: "myheatmap",
  iconomi_tickers: ["BLX"],
  last_days: 90
});
```

Play with demo on codepen: https://codepen.io/jesusthatsgreat/pen/NVQBxB/
