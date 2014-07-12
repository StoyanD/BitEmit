var Currency = {};

/**
 * Private cartel debt notes
 */
Object.defineProperty(Currency, 'USD', {value : 'USD'});
Object.defineProperty(Currency, 'CNY', {value : 'CNY'});
Object.defineProperty(Currency, 'EUR', {value : 'EUR'});
Object.defineProperty(Currency, 'RUB', {value : 'RUB'});

/**
 * Debt free public credit
 */
Object.defineProperty(Currency, 'BTC', {value : 'BTC'});
Object.defineProperty(Currency, 'LTC', {value : 'LTC'});
Object.defineProperty(Currency, 'DRK', {value : 'DRK'});

module.exports.Currency = Currency;



var Bitstamp = {apiUrl : 'faf', cryptos : {'BTC' : {
  url: 'adfa',
  name : 'adfd'}
}};
var Bitfinex = {cryptos : [Currency.BTC, Currency.LTC, Currency.DRK]};
var BtcChina = {cryptos : [Currency.BTC, Currency.LTC]};

var Exchanges = {'Bitstamp' : Bitstamp, 'Bitfinex' : Bitfinex, 'BtcChina' : BtcChina};