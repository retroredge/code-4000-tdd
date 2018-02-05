let rolls = [];

const roll = (pinsKnockedDown) => {
  rolls.push(pinsKnockedDown);
};

function scoreForAFrame(rollIndex) {
  return rolls[rollIndex] + rolls[rollIndex + 1];
}

function scoreForAStrike(rollIndex) {
  return 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2];
}

function scoreForASpare(rollIndex) {
  return 10 + rolls[rollIndex + 2];
}

function theyScoredAStrike(rollIndex) {
  return rolls[rollIndex] === 10;
}

function theyScoredASpare(rollIndex) {
  return scoreForAFrame(rollIndex) === 10;
}

const score = () => {
  let score = 0;
  let frameCount = 0;
  let rollIndex = 0;
  while(frameCount < 10) {
    if (theyScoredAStrike(rollIndex)) {
      score = score + scoreForAStrike(rollIndex);
      rollIndex++;
    } else if (theyScoredASpare(rollIndex)) {
      score = score + scoreForASpare(rollIndex);
      rollIndex += 2;
    } else {
      score = score + scoreForAFrame(rollIndex);
      rollIndex += 2;
    }

    frameCount++;
  }

  return score;
};

const reset = () => {
  rolls = [];
};

module.exports.roll = roll;
module.exports.score = score;
module.exports.reset = reset;