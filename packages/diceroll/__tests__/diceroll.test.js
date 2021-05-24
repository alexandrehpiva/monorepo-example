const diceroll = require('..');

describe('diceroll', () => {
  it('Rolls the dice correctly', () => {
    expect(diceroll.roll('1d20')).toBe('I rolled a dice: 1d20. Outcome grim');
  });
});
