const assert = require('assert');
const { add } = require('./../index');

describe('The ADD function tests', function() {
  it('Should return 11 for args 5 and 6', function() {
    const actual = add(5, 6);
    const expectation = 11;
    assert.equal(actual, expectation);
  });
  it('Should throw if args are not passed', function() {
    assert.throws(() => {
      add();
    });
  });
});
