const chai = require('chai');
const expect = chai.expect;

const totalScore = require('../src/bowling');

describe('totalScore', () => {
  it('scores game with no strikes or spares', () => {
    const scores = '23  23  23  23  23  23  23  23  23  23';
    // frames:  5,  5,  5,  5,  5,  5,  5,  5,  5,  5
    // total:   5, 10, 15, 20, 25, 30, 35, 40, 45, 50
    expect(totalScore(scores)).to.equal(50);
  });

  it('scores game with spares', () => {
    const scores = '2/  32  23  23  23  23  23  23  23  23';
    // frames: 13,  5,  5,  5,  5,  5,  5,  5,  5,  5
    // total:  13, 18, 23, 28, 33, 38, 43, 48, 53, 58
    expect(totalScore(scores)).to.equal(58);
  });

  it('scores game with strikes', () => {
    const scores =  'X  23  23  23  23  23  23  23  23  23';
    // frames: 15,  5,  5,  5,  5,  5,  5,  5,  5,  5
    // total:  15, 20, 25, 30, 35, 40, 45, 50, 55, 60
    expect(totalScore(scores)).to.equal(60);
  });

  it('scores game with consecutive strikes', () => {
    // get next 2 rolls so first one is 10 + 10 + 10, 2nd one is 10 + 10 + 2, 3rd one is 10 + 2 + 3
    const scores =  'X   X   X  23  23  23  23  23  23  23';
    // frames: 30, 22, 15,  5,  5,  5,  5,  5,  5,  5
    // total:  30, 52, 67, 72, 77, 82, 87, 92, 97, 102
    expect(totalScore(scores)).to.equal(102);
  });

  it('scores game with spare after strike', () => {
    const scores =  'X  2/  23  23  23  23  23  23  23  23';
    // frames: 20, 12,  5,  5,  5,  5,  5,  5,  5,  5
    // total:  20, 32, 37, 42, 47, 52, 57, 62, 67, 72
    expect(totalScore(scores)).to.equal(72);
  });
});
