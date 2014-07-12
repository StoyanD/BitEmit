/**
 * Created by stoyan on 7/12/14.
 */
var chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  Exchange = require('../lib/exchanges/exchange').Exchange;


describe('Exchange functions', function(){
  var exch = new Exchange();
  it('Prototype functions should exist', function(){

    exch.should.exist;
    exch.should.have.property('startListening').that.is.a('function');
    exch.should.have.property('stopListening').that.is.a('function');
    exch.should.have.property('addListener').that.is.a('function');
    exch.should.have.property('removeListener').that.is.a('function');
    exch.should.have.property('setInterval').that.is.a('function');
    exch.should.have.property('getTradeData').that.is.a('function');

  });
});