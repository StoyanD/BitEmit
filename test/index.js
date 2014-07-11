var chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  BitEmit = require('../lib/bitemit').BitEmit,
  Bitstamp = require('../lib/bitstamp').Bitstamp;


suite('Assertions', function(){
  test('should add', function(){
    var bitstamp = new Bitstamp();
    bitstamp.should.exist.and.be.an.instanceOf(BitEmit)
      .with.property('b').that.is.a('number').that.equals(0);
    bitstamp.add(5);
    bitstamp.should.have.property('b').that.equals(5);

  });
//  test('should pass on truthiness', function(){
//    assert.ok(true);
//  });
//  test('should fail on falsiness', function(){
//    assert.ok(false);
//  });
//  describe('aa', function(){
//    it('returns adfafda ', function(){
//      bitemit.a.should.be.a('number');
//    });
//  });

});