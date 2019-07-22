# Crypto Fund Charts Configuration

#### Pie & Donut Charts Configuration

Note: chart_id is a required param along with one value in iconomi_tickers (if multiple tickers are specified only the first one will be used).

| Param  | Description | Example |
| --- | --- | --- |
| chart_id <br><small>String</small> | chart gets inserted in to this element id | `"mychart"`
| iconomi_tickers <br><small>Array</small> | [ICONOMI](https://www.iconomi.com/crypto-funds?ref=WJVwG) crypto fund tickers | `["BLX"]`
| loading_indicator<br><small>Boolean or object</small> | SVG loading icon containing 4 vertical bars displayed while data is being fetched  | `true` <br><small>or<small><br> `{colors: ["red","green","#000000","#123456"]}`
| options <br><small>Object</small> | Full list of options available at https://apexcharts.com/docs/options/ | ```{chart: {type: 'pie'}}```

<hr>

#### 100% Stacked Bar Chart Configuration

Note: chart_id is a required param along with at least one value in iconomi_tickers.

| Param  | Description | Example |
| --- | --- | --- |
| chart_id <br><small>String</small> | chart gets inserted in to this element id | `"mychart"`
| iconomi_tickers <br><small>Array</small> | [ICONOMI](https://www.iconomi.com/crypto-funds?ref=WJVwG) crypto fund tickers | `["BLX", "CAR", "CCC"]`
| loading_indicator<br><small>Boolean or object</small> | SVG loading icon containing 4 vertical bars displayed while data is being fetched  | `true` <br><small>or<small><br> `{colors: ["red","green","#000000","#123456"]}`
| options* <br><small>Object</small> | Full list of options available at https://apexcharts.com/docs/options/ | ```{chart: {type: 'pie'}}```
