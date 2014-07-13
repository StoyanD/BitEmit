/**
 * Created by stoyan on 7/12/14.
 */
var chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  Exchange = require('../../lib/exchanges/exchange').Exchange;


describe('Exchange functions', function(){
  var exch = new Exchange();
  it('Prototype functions should exist', function(){

    exch.should.exist;
    exch.should.have.property('startListening').that.is.a('function');
    exch.should.have.property('stopListening').that.is.a('function');
    exch.should.have.property('addListener').that.is.a('function');
    exch.should.have.property('removeListener').that.is.a('function');
    exch.should.have.property('setIntervalTime').that.is.a('function');
    exch.should.have.property('getTradeData').that.is.a('function');
    exch.should.have.property('processRes').that.is.a('function');
  });

  describe('Prototype methods should work', function(){
    it('processRes parse json correctly and ammend fields if absent', function(){
      exch.processRes("{\"BTC\" : 10.02}").should.have.property('BTC');
    });

    it('setIntervalTime should change interval and ' +
      'the interval should have a default value', function(){
      exch.intervalTime.should.equal(5000);//The DEFAULT_INTERVAL
      exch.setIntervalTime(1000);
      exch.intervalTime.should.equal(1000);
    });


  });

});