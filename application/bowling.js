function Game() {
    const rolls = [];

    this.roll = (numberOfPins) => {
        rolls.push(numberOfPins);
    };

    this.theyScoredASpare = (rollIndex) => {
        return rolls[rollIndex] + rolls[rollIndex + 1] === 10
    };

    this.theyScoredAStrike = (rolls, rollIndex) => {
        return rolls[rollIndex] === 10;
    };

    function scoreAStrike(score, rollIndex) {
        return score + 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2];
    }

    function scoreASpare(score, rollIndex) {
        return score + 10 + rolls[rollIndex + 2];
    }

    this.score = () => {
        let score = 0;
        let frameCount = 0;
        let rollIndex = 0;
        while (frameCount < 10) {
            if (this.theyScoredAStrike(rolls, rollIndex)) {
                score = scoreAStrike(score, rollIndex);
                rollIndex += 1;
            } else if (this.theyScoredASpare(rollIndex)) {
                score = scoreASpare(score, rollIndex);
                rollIndex += 2;
            } else {
                score = score + rolls[rollIndex] + rolls[rollIndex + 1];
                rollIndex += 2;
            }

            frameCount++;
        }
        return score;
    };

}

module.exports.Game = Game;
