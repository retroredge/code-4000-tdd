// This file contains the tests that describe the behaviour that we expect our game
// have when provided with the various inputs that we can provide.

// This project uses a test framework called 'Mocha' to make the tests run
// and produce a report telling us whether the tests have passed (green result)
// or failed (red result)

// The 'require' function is a NodeJS function that allows us to including
// functions from a different file within our project. The first statement
// makes the 'assert' functions available for us to check our game's results.
// These assert functions are provided by a third party library called 'Chai'.
// The second statement makes our game available to the test code.
var assert = require('chai').assert;
var game = require('../application/fizzBuzzGame');

// The 'describe' function is part of the Mocha library and it allows
// us to group tests together logically. By running this single module
// you will exercise your game code 12 times.
describe('Fizz Buzz Tests', function () {

  // The 'it' function is part of the Mocha library and it allows
  // us to provide a human readable description for the test along
  // with a function containing the test(s) themselves.
  it('says normal numbers', function () {
      // This first test statement executes the game's 'say' function passing in the
      // Integer 1. The result must be a String equal to '1' for the test to pass
      assert.strictEqual(game.say(1), '1');
      assert.strictEqual(game.say(2), '2');
      assert.strictEqual(game.say(22), '22');
    });

  // Notice how the different 'it' functions in this module are used to
  // group tests together that are checking for the similar behaviour
  it('says "Fizz" for numbers divisible by 3', function () {
    assert.strictEqual(game.say(3), 'Fizz');
    assert.strictEqual(game.say(9), 'Fizz');
    assert.strictEqual(game.say(21), 'Fizz');
  });

  it('says "Buzz" for numbers divisible by 5', function () {
    assert.strictEqual(game.say(5), 'Buzz');
    assert.strictEqual(game.say(10), 'Buzz');
    assert.strictEqual(game.say(20), 'Buzz');
  });

  it('says "Fizz Buzz" for numbers divisible by 3 and 5', function () {
    assert.strictEqual(game.say(15), 'Fizz Buzz');
    assert.strictEqual(game.say(30), 'Fizz Buzz');
    assert.strictEqual(game.say(45), 'Fizz Buzz');
  })

});