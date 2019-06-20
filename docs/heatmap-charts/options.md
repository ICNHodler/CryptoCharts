# Heatmap Configuration

Note: only one ticker (or custom data) can be used for heatmaps. For example you can only display a heatmap for either BTC or BLX, not both combined. If more than one ticker is specified, the heatmap will be generated for the first ticker.

| Param  | Description | Example |
| --- | --- | --- |
| chart_id <br><small>String</small> | chart gets inserted in to this element id | `"mychart"`
| iconomi_tickers <br><small>Array</small> | [ICONOMI](https://www.iconomi.com/crypto-funds) crypto fund tickers | `["BLX"]`
| cryptocompare_tickers <br><small>Array</small> | Crypto symbols /  tickers as supported by [CryptoCompare](https://www.cryptocompare.com/) | `["BTC"]`
| cryptocompare_api_key <br><small>String</small> | API key which will be appended to requests | `"hffrjkjwrggrwrwjg"`
| last_days <br><small>Number</small> | number of days to display history for | `90`
| custom_data <br><small>Array</small> | Array of objects containing time (x) and price (y) values | `[{ x: 1554840000, y: 0.14 }, { x: 1555012800, y: 0.13 }]`
| loading_indicator<br><small>Boolean or object</small> | SVG loading icon containing 4 vertical bars displayed while data is being fetched  | `true` <br><small>or<small><br> `{colors: ["red","green","#000000","#123456"]}`
| options <br><small>Object</small> | Full list of options available at https://apexcharts.com/docs/options/ | ```{tooltip: {enabled: false}}```
