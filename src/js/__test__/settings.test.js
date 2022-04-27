import Settings from '../settings.js';

describe('class Settings should:', () => {
  test('set default settings', () => {
    const result = new Settings();
    const expected = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    expect(result.settings).toEqual(expected);
  });

  test('set user settings', () => {
    const result = new Settings();
    const expected = new Map([
      ['theme', 'light'],
      ['music', 'rock'],
      ['difficulty', 'normal'],
    ]);
    result.setUserSettings('theme', 'light');
    result.setUserSettings('music', 'rock');
    result.setUserSettings('difficulty', 'normal');
    expect(result.settings).toEqual(expected);
  });

  test('throw new error if the key is not correct', () => {
    const result = () => {
      const settings = new Settings();
      settings.setUserSettings('level', 'one');
    };

    expect(result).toThrow('Key or value are not correct');
  });

  test('throw new error if the value is not correct', () => {
    const result = () => {
      const settings = new Settings();
      settings.setUserSettings('theme', 'blue');
    };

    expect(result).toThrow('Key or value are not correct');
  });
});
