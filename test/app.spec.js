var assert = require('chai').assert;
var app = require('../application/app');
var aBoolean = app.aBoolean;
var aString = app.aString;
var aNumber = app.aNumber;

describe('Code 4000 TDD Workshop', function () {
  it('ensure that the project is ready to go', function ()  {
    assert.isOk(aBoolean());
    assert.isNotOk(!aBoolean());
    assert.equal(aBoolean(), true);
    assert.notEqual(!aBoolean(), true);

    assert.equal(aString(), '42');
    assert.equal(aNumber(), '42');

    assert.strictEqual(aString(), '42');
    assert.strictEqual(aNumber(), 42);

    // These next two lines would fail and are included for demo purposes only
    // assert.strictEqual(aNumber(), '42');
    // assert.strictEqual(aString(), 42);
  })
});