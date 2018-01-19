const assert = require('chai').assert;
const app = require('../application/app');
const aBoolean = app.aBoolean;
const aString = app.aString;
const aNumber = app.aNumber;

describe('Code 4000 TDD Workshop', () => {
  it('ensure that the project is ready to go', () => {
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
