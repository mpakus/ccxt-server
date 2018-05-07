# REST API for CCXT library

## Install

> npm install -g ccxt-server

## Run

> ccxt-server

## API

- [Exchanges list](#exchanges-list)
- [Market's Currencies](#markets-currencies)
- [Market's Symbols](#markets-symbols)
- [Market's Current Tickers Values](#markets-current-tickers-values)


#### Exchanges list
Request
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:9090/exchanges
```

Response
```
[
  "_1broker",
  "_1btcxe",
  "acx",
  "allcoin",
  "anxpro",
  "bibox",
  "binance",
  "bit2c",
  "bitbank",
  "bitbay",
  "bitfinex",
  "bitfinex2",
  "bitflyer",
  "bithumb",
  "bitkk",
  "bitlish",
  "bitmarket",
  "bitmex",
  "bitso",
  "bitstamp",
  "bitstamp1",
  "bittrex",
  "bitz",
  "bl3p",
  "bleutrade",
  "braziliex",
  "btcbox",
  "btcchina",
  "btcexchange",
  "btcmarkets",
  "btctradeim",
  "btctradeua",
  "btcturk",
  "btcx",
  "bxinth",
  "ccex",
  "cex",
  "chbtc",
  "chilebit",
  "cobinhood",
  "coincheck",
  "coinegg",
  "coinex",
  "coinexchange",
  "coinfloor",
  "coingi",
  "coinmarketcap",
  "coinmate",
  "coinnest",
  "coinone",
  "coinsecure",
  "coinspot",
  "coolcoin",
  "cryptopia",
  "dsx",
  "ethfinex",
  "exmo",
  "exx",
  "flowbtc",
  "foxbit",
  "fybse",
  "fybsg",
  "gatecoin",
  "gateio",
  "gdax",
  "gemini",
  "getbtc",
  "hadax",
  "hitbtc",
  "hitbtc2",
  "huobi",
  "huobicny",
  "huobipro",
  "ice3x",
  "independentreserve",
  "indodax",
  "itbit",
  "jubi",
  "kraken",
  "kucoin",
  "kuna",
  "lakebtc",
  "lbank",
  "liqui",
  "livecoin",
  "luno",
  "lykke",
  "mercado",
  "mixcoins",
  "negociecoins",
  "nova",
  "okcoincny",
  "okcoinusd",
  "okex",
  "paymium",
  "poloniex",
  "qryptos",
  "quadrigacx",
  "quoinex",
  "southxchange",
  "surbitcoin",
  "therock",
  "tidebit",
  "tidex",
  "urdubit",
  "vaultoro",
  "vbtc",
  "virwox",
  "wex",
  "xbtce",
  "yobit",
  "yunbi",
  "zaif",
  "zb"
]
```

#### Market's Currencies

Request
:exchange - exchange name (e.g. bittrex)
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:9090/currencies/:exchange
```

Response
```
{
  "BCH":{
    "id":"BCH",
    "code":"BCH",
    "info":{
      "aclass":"currency",
      "altname":"BCH",
      "decimals":10,
      "display_decimals":5
    },
    "name":"BCH",
    "active":true,
    "status":"ok",
    "precision":10,
    "limits":{
      "amount":{
        "min":1e-10,
        "max":10000000000
      },
      "price":{
        "min":1e-10,
        "max":10000000000
      },
      "cost":{

      },
      "withdraw":{
        "max":10000000000
      }
    }
  },
  "DASH":{
    "id":"DASH",
    "code":"DASH",
    "info":{
      "aclass":"currency",
      "altname":"DASH",
      "decimals":10,
      "display_decimals":5
    },
    "name":"DASH",
    "active":true,
    "status":"ok",
    "precision":10,
    "limits":{
      "amount":{
        "min":1e-10,
        "max":10000000000
      },
      "price":{
        "min":1e-10,
        "max":10000000000
      },
      "cost":{

      },
      "withdraw":{
        "max":10000000000
      }
    }
  },
  ...
}
```

#### Market's Symbols

Request
:exchange - exchange name (e.g. bittrex)
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:9090/symbols/:exchange
```

Response
```
[
  "BCH/BTC",
  "BCH/EUR",
  "BCH/USD",
  "BTC/CAD",
  "BTC/EUR",
  "BTC/GBP",
  "BTC/JPY",
  "BTC/USD",
  "DASH/BTC",
  "DASH/EUR",
  ...
]
```

#### Market's Current Tickers Values

Request
:exchange - exchange name (e.g. bittrex)
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:9090/tickers/:exchange
```

Response
```
{
  "LTC/BTC":{
    "symbol":"LTC/BTC",
    "timestamp":1525679738000,
    "datetime":"2018-05-07T07:55:38.000Z",
    "high":0.01793101,
    "low":0.01734399,
    "bid":0.017356,
    "ask":0.017362,
    "close":0.017362,
    "last":0.017362,
    "baseVolume":200852.3536,
    "info":{
      "date":1525679738,
      "last":"0.01736200",
      "buy":"0.01735600",
      "sell":"0.01736200",
      "high":"0.01793101",
      "low":"0.01734399",
      "vol":"200852.3536"
    }
  },
  ...
  "ETH/BTC":{
    "symbol":"ETH/BTC",
    "timestamp":1525679738000,
    "datetime":"2018-05-07T07:55:38.000Z",
    "high":0.08249345,
    "low":0.07890199,
    "bid":0.07894101,
    "ask":0.07906502,
    "close":0.07906502,
    "last":0.07906502,
    "baseVolume":45252.8574,
    "info":{
      "date":1525679738,
      "last":"0.07906502",
      "buy":"0.07894101",
      "sell":"0.07906502",
      "high":"0.08249345",
      "low":"0.07890199",
      "vol":"45252.8574"
    }
  }
}
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/mpakus/ccxt-server. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
