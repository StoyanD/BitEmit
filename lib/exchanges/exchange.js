/**
 * Created by stoyan on 7/12/14.
 */
var request = request = require('request'),
  moment = require('moment');

var mContext;

function Exchange(){
  this.tradesUrl = { 'BTC' : 'https://api.bitfinex.com/v1/trades/btcusd',
    'LTC' : 'https://api.bitfinex.com/v1/trades/ltcusd',
    'DRK' : 'https://api.bitfinex.com/v1/trades/drkusd'};

  mContext = this;
}


function getTradesData(crypto, sinceTrade){
  setTimeout(function(){
    logStuff.apply(mContext);
  }, 2000);
}

function logStuff(){
  console.log('this.tradesURL ' + JSON.stringify(this.tradesUrl));
  getTradesData();
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

exports.Bitfinex = Bitfinex;