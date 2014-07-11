var chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
    bitemit = require('../index');


suite('Assertions', function(){
  test('should pass on truthiness', function(){
    assert.ok(true);
  });
  test('should fail on falsiness', function(){
    assert.ok(false);
  });
  describe('aa', function(){
    it('returns adfafda ', function(){
      bitemit.a.should.be.a('number');
    });
  });

});