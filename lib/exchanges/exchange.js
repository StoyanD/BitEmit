/**
 * Created by stoyan on 7/12/14.
 */
var request = request = require('request'),
  moment = require('moment');

var DEFAULT_INTERVAL = 5000;
var _context;

function Exchange(cryptoOpt, interval){
  this._url = {
  tradesUrl : { 'BTC' : 'https://api.bitfinex.com/v1/trades/btcusd',
      'LTC' : 'https://api.bitfinex.com/v1/trades/ltcusd',
      'DRK' : 'https://api.bitfinex.com/v1/trades/drkusd'},
    historicTradesUrl : {'BTC' : 'https://api.bitfinex.com/v1/pubtrades/btcusd/?since=',
      'LTC' : 'https://api.bitfinex.com/v1/pubtrades/ltcusd/?since=',
      'DRK' : 'https://api.bitfinex.com/v1/pubtrades/drkusd/?since='}
  };
  this.intervalTime = interval || DEFAULT_INTERVAL;
  this._cryptoOpt = cryptoOpt;

  _context = this;

}
//var opt = {'BTC' : {'tid' : 123}, 'LTC' : null, 'DRK' : null};

Exchange.prototype.startListening =  function(crypto, sinceTrade){
  this.timeoutId = setTimeout(function(){
//    logStuff.apply(_context);

  }, this.timeoutId);
};

Exchange.prototype.stopListening =  function(crypto, sinceTrade){
  clearInterval(this.intervalId);
};

Exchange.prototype.addListener = function(){

};

Exchange.prototype.removeListener = function(){

};

Exchange.prototype.setInterval = function(){

};

Exchange.prototype.getTradeData = function(url){

};


function logStuff(){
  console.log('this.tradesURL ' + JSON.stringify(this.tradesUrl));
//  getTradesData();
}


function getData(){
  //get the trades data
  request(url, function(error, response, body){
    if(body){

      var trades = processRes(body);

      /**
       * When getting by timestamp, it is AT or after, so we will always get the newest trade,
       * whether or not we have recorded it.
       *
       * trades.length does not have to be === 1 since multiple trades could have happened in the same second
       *
       * the newest trade is at position 0
       */
      var last = getLastTrade(crypto);
      var repeat = last && trades.length !== 0
        && last.tid === trades[0].tid;

//            console.log('repeat : ' + repeat);
      //unlock updates on this currency if there are no trades newer than the newest trade timestamp in db
      if(repeat || trades.length === 0){
//                console.log('ending recursion');
        lockCryptoUpdate(crypto, false);
        return;
      }

      //Emit the trades array
      emitTrades(self, trades, crypto);

      //set the newest trade received, WARNING, exchanges set their JSON order differently, ie. acs vs dsc
      setLastTrade(trades[0], crypto);

      //Keep calling recursively until we have recorded all current trades
      getTradeData(self, crypto);
    }
  });
}

exports.Exchange = Exchange;