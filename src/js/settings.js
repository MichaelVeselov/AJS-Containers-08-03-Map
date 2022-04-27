import options from './options.js';

export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map();
  }

  setUserSettings(key, value) {
    if (key in options && options[key].includes(value)) {
      this.userSettings.set(key, value);
    } else {
      throw new Error('Key or value are not correct');
    }
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
