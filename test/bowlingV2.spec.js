const assert = require('chai').assert;
const game = require('../application/bowlingV2');

describe('Bowling game V2 tests', () => {
    beforeEach(() => {
        game.reset();
    });

    it('scores 0 for all noughts', () => {
        recordRolls([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        assert.equal(game.score(), 0);
    });

    it('scores 20 for all ones', () => {
        recordRolls([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        assert.equal(game.score(), 20);
    });

    it('scores 16 for a spare followed by three followed by all misses', () => {
        recordRolls([2, 8, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        assert.equal(game.score(), 16);
    });

    it('scores 24 for a strike in the first frame, followed by three and then four pins, followed by all misses', () => {
        recordRolls([10, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        assert.equal(game.score(), 24);
    });

    it('scores 300 for the perfect game (12 rolls)', () => {
        recordRolls([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
        assert.equal(game.score(), 300);
    });

});

function recordRolls(pinsKockedDown) {
    pinsKockedDown.forEach((numberOfPins) => {
        game.roll(numberOfPins);
    });
}
