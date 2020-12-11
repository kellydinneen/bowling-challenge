// BOWLING RULES
//
// A game consists of 10 frames
// Each frame has two rolls to knock down 10 pins
//
// 10 pins knocked down on the first roll => STRIKE (X)
// 10 pins knocked down after second roll => SPARE  (/)
//
// Frame Scoring
// No strikes or spares: number of pins knocked down
// STRIKE: 10 + number of pins knocked down in next 2 rolls
// SPARE:  10 + number of pins knocked down in next roll

function totalScore(input) {
  const characters = input.split('');
  const roll = characters.filter(digit => digit !== ' ' && digit !== ',');

  const rollScores = roll.map(roll => {
    if (roll != 'X' && roll != '/') {
      return Number(roll);
    } else {
      return roll;
    }
  });
  console.log(rollScores);

  let rollTotal = 0;
  for (var i = rollScores.length - 1; i >= 0; i--) {
    if (rollScores[i] === 'X') {
      rollTotal += 10 + getSimpleScoreEquivalent(rollScores, i+1) + getSimpleScoreEquivalent(rollScores, i+2);
    } else if (rollScores[i] === '/') {
      rollTotal += 10 - rollScores[i - 1] + getSimpleScoreEquivalent(rollScores, i+1);
    } else {
      rollTotal += rollScores[i];
    }
  };

  return rollTotal;
};

function getSimpleScoreEquivalent(array, index) {
  if (array[index] === 'X') {
    return 10;
  } else if (array[index] === '/') {
    return 10 - array[index - 1];
  } else if (array[index] === undefined) {
    return 0;
  } else {
    return array[index];
  }
};

module.exports = totalScore;
