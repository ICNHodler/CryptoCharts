# ROI Comparison Chart
Chart the % ROI of one or many ICONOMI crypto funds or digital assets over a set period of time.

<div id="roichart" class="box">
  <div class="loading"></div>
</div>
<script>
CryptoCharts.roiComparison({
  chart_id: "roichart",
  iconomi_tickers: ["BLX", "CAR"],
  cryptocompare_tickers: ["BTC", "ETH"],
  last_days: 14,
  options: {
    chart: {
      events: {
        mounted: function(chartContext, config) {
          setTimeout(function(){
            document.querySelectorAll("#roichart .loading")[0].remove();
          }, 500);
        }
      }
    }
  }
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
  last_days: 14
});
```

<iframe height="600" style="width: 100%;" scrolling="no" title="ROI of crypto assets over time" src="//codepen.io/jesusthatsgreat/embed/preview/YbMbPp/?height=600&theme-id=37041&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
