# Donut / Pie Chart
Display a breakdown of an ICONOMI crypto fund in the form of a pie or donut chart.

<div id="holdings" class="box">
  <div class="loading"></div>
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
  }
});
```

Play with demo on codepen: https://codepen.io/jesusthatsgreat/pen/joRjaW/

---

# 100% Stacked Bar Chart
Display a breakdown of one or many ICONOMI crypto funds in the form of a 100% stacked horizontal bar chart.

<div id="holdingsBar" class="box">
  <div class="loading"></div>
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
  }
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
      type: 'donut',
      events: {
        mounted: function(chartContext, config) {
          removeFadeOut(document.querySelectorAll("#holdings .loading")[0], 500);
        }
      }
    }
  }
});
CryptoCharts.cryptoFundBar({
  chart_id: "holdingsBar",
  iconomi_tickers: ["BLX","CAR","MOON"],
  options: {
    chart: {
      height: 400,
      events: {
        mounted: function(chartContext, config) {
          removeFadeOut(document.querySelectorAll("#holdingsBar .loading")[0], 500);
        }
      }
    }
  }
});
</script>
