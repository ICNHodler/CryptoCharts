[![GitHub license](https://img.shields.io/github/license/ICNHodler/CryptoCharts.svg)](https://github.com/ICNHodler/CryptoCharts/blob/master/LICENSE)
[![GitHub version](https://badge.fury.io/gh/ICNHodler%2FCryptoCharts.svg)](https://www.npmjs.com/package/cryptocharts)
[![npm version](https://badge.fury.io/js/cryptocharts.svg)](https://www.npmjs.com/package/cryptocharts)
[![npm](https://img.shields.io/npm/dw/cryptocharts.svg)](https://www.npmjs.com/package/cryptocharts)
[![GitHub last commit](https://img.shields.io/github/last-commit/ICNHodler/CryptoCharts.svg)](https://github.com/ICNHodler/CryptoCharts)
[![Twitter Follow](https://img.shields.io/twitter/follow/icnhodler.svg?style=popout)](https://twitter.com/icnhodler)

# Crypto Charts

Beautiful, interactive, ready-to-go crypto SVG charts. This library makes it easy to display crypto prices over time, ROI over time, ICONOMI crypto fund holdings and more. Currently works with ICONOMI and CryptoCompare APIs with a dependency on apexcharts.js.

Full docs and demos: https://icnhodler.github.io/CryptoCharts/

---

# Getting Started
##### Install via npm:

`npm install cryptocharts --save`

and once installed then `import * as CryptoCharts from "cryptocharts"` in your main js file.

---

##### Or just include directly using script tag:

`<script src="https://cdn.jsdelivr.net/npm/cryptocharts"></script>`

---
# Creating your first chart
There are many chart types and demos which you'll find in the navigation menu but as a quick example, these few lines of code create an area chart showing the ROI between ETH, BTC, BLX and CAR (ICONOMI crypto funds) over the past 90 days.

```html
<div id="mychart"></div>
```
```js
CryptoCharts.roiComparison({
  chart_id: "mychart",
  cryptocompare_tickers: ["BTC","ETH"],
  iconomi_tickers: ["BLX","CAR"],
  last_days: 90
});
```

https://codepen.io/jesusthatsgreat/embed/RmOJOJ/

# Options
The library is powered by ApexCharts and there are a huge number of options available from their docs here: https://apexcharts.com/docs/options/. For example in the chart above if you decide you want to change the chart colours, add a chart title and turn it in to a line chart (instead of an area chart), you can do so like this:

```js
CryptoCharts.roiComparison({
  chart_id: "mychart",
  cryptocompare_tickers: ["BTC", "ETH"],
  iconomi_tickers: ["BLX","CAR"],
  last_days: 90,
  options: {
    colors: ["#88AA24","#EF1273","#122673","#000000"],
    title: true,
    chart: {
      type: 'line'
    }
  }
});
```

https://codepen.io/jesusthatsgreat/embed/ZNNxyO

Note that all options will not work with all chart types - for example in the example above you can't set the chart type to 'pie' because the data isn't in a pie-chart-friendly format (I'm not sure what you'd expect a pie chart to look like by inputting an array of dates and prices!). In general, most of the options are self explanatory and you should find they work with a little trial an error. These docs will expand over time to include more examples with frequently used options.
