#! /usr/bin/env node

const cloudscraper = require('cloudscraper');
const ccxt = require('ccxt');
const express = require('express');
const app = express();

const error_log =(exception, exchange) => {
  console.log('--------------------------------------------------------');
  console.log('Failed.');
  console.log(exception.constructor.name, exception.message);
  console.log('--------------------------------------------------------');
  console.log(exchange.last_http_response);
}

const scrapeCloudflareHttpHeaderCookie = (url) =>
 (new Promise((resolve, reject) =>
   (cloudscraper.get(url, function(error, response, body) {
      if(error) {
        reject(error)
      } else {
        resolve(response.request.headers)
      }
    }))
  ));


const fetch_currencies =(request, response) => {
 (async() => {
    const exchange = new ccxt[request.params['exchange']]();
    exchange.headers = await scrapeCloudflareHttpHeaderCookie(exchange.urls.www);
    try {
      await exchange.loadMarkets();
      response.json(await exchange.currencies);
      console.log(request.originalUrl);
      console.log('Success.');
    } catch(exception) {
      error_log(exception, exchange);
    }
  })();
};

const fetch_symbols =(request, response) => {
 (async() => {
    const exchange = new ccxt[request.params['exchange']]();
    exchange.headers = await scrapeCloudflareHttpHeaderCookie(exchange.urls.www);
    try {
      await exchange.loadMarkets();
      response.json(await exchange.symbols);
      console.log(request.originalUrl);
      console.log('Success.');
    } catch(exception) {
      error_log(exception, exchange);
    }
  })();
};

const fetch_tickers =(request, response) => {
 (async() => {
    const exchange = new ccxt[request.params['exchange']]();
    exchange.headers = await scrapeCloudflareHttpHeaderCookie(exchange.urls.www);
    try {
      response.json(await exchange.fetchTickers());
      console.log(request.originalUrl);
      console.log('Success.');
    } catch(exception) {
      error_log(exception, exchange);
    }
  })();
};

const exchanges_list =(request, response) => {
  try {
    response.json(ccxt.exchanges);
    console.log(request.originalUrl);
    console.log('Success.');
    } catch(exception) {
      error_log(exception, exchange);
  }
};

const cf_headers =(request, response) => {
 (async() => {
    const exchange = new ccxt[request.params['exchange']]();
    try {
      exchange.headers = await scrapeCloudflareHttpHeaderCookie(exchange.urls.www);
      response.json(await exchange.headers);
    } catch(exception) {
      error_log(exception, exchange);
    }
  })();
};

app.get('/exchanges', exchanges_list);
app.get('/currencies/:exchange', fetch_currencies);
app.get('/symbols/:exchange', fetch_symbols);
app.get('/tickers/:exchange', fetch_tickers);
app.get('/cf_headers/:exchange', cf_headers);

app.listen(9090,() => console.log('CCXT server runs on 9090'));
