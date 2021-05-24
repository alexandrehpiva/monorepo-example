const utils = require('..');

describe('utils', () => {
  it('Rolls the dice correctly', () => {
    expect(utils.roll('1d20')).toBe('I rolled a dice: 1d20. Outcome grim');
  });
});
