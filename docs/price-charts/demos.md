# Sparkline Chart
No labels, legend or values on x & y axis, just a simple shape with price on hover over data points.

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

<iframe height="320" style="width: 100%;" scrolling="no" title="ROI of crypto assets over time" src="//codepen.io/jesusthatsgreat/embed/preview/OYGqBJ/?height=320&theme-id=37041&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
