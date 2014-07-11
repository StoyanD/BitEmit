var chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  BitEmit = require('../lib/bitemit').BitEmit,
  Bitstamp = require('../lib/bitstamp').Bitstamp;


describe('BitEmit functions', function(){
  var bitemit = new BitEmit();
  it('Prototype function should exist', function(){

    bitemit.should.exist;
    bitemit.should.have.property('addExchage').that.is.a('function');
    bitemit.should.have.property('removeExchage').that.is.a('function');
    bitemit.should.have.property('start').that.is.a('function');
    bitemit.should.have.property('stop').that.is.a('function');
    bitemit.should.have.property('addCrypto').that.is.a('function');
  });
  describe('Exchange addition and removal of cryptos', function(){
    describe('addExchange should function correctly', function(){
      it('addExchage(exchange, cryptoOpts, listener) should set only specifically included cryptos');
      it('addExchage(exchange, listener) should include all cryptos on that exchange');
    });
    describe('removeExchange should function correctly', function(){
      it('removeExchange(exchange) should remove the listeners attached to all the cryptos in an exchange');
    });
    describe('addCrypto should function correctly', function(){
      it('addCrypto(exchange, listener) should ');
    });
  });


});

