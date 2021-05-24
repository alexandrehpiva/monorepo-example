const utils = require('..');

describe('concat', () => {
  it('Concatenate strings correctly', () => {
    expect(utils.concat('Hello', ' World!')).toBe('Hello World!');
  });
});
