var chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  EventEmitter = require('events').EventEmitter,
  BitEmit = require('../lib/bitemit').BitEmit;


describe('BitEmit functions', function(){
  var bitemit = new BitEmit();

  it('BitEmit inheritance', function(){
    bitemit.should.be.an.instanceOf(EventEmitter);
    bitemit.should.be.an.instanceOf(require('../lib/constants').Constants);
  });
  it('Prototype functions should exist', function(){

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

  describe('Starting and stopping of emitter', function(){
    describe('Starting the emitter', function(){
      it('should poll all the attached exchanges');
      it('should emit only new trades');
      it('should emit all trades since init trade tid(IF GIVEN) for particular exchanges and crypto pairs');
    });
    describe('Stopping the emitter', function(){
      it('should stop the emission of any new trades');
      it('should should hold the last emitted trades in memory')
    });
  });


});

