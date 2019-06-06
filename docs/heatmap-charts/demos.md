# Heatmap
Display a calendar heatmap of the daily % gain/loss of any ICONOMI crypto fund or CryptoCompare asset.

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

<iframe height="320" style="width: 100%;" scrolling="no" title="ROI of crypto assets over time" src="//codepen.io/jesusthatsgreat/embed/preview/YbMMEX/?height=320&theme-id=37041&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
