/* eslint no-undef: off */
import { isLegalConfigKey, audioButtonNeedChange } from '../src/tools';

describe('tools test', () => {
  it('isLegalConfigKey test', () => {
    expect(isLegalConfigKey('aaa')).toBe(false);
    expect(isLegalConfigKey('position')).toBe(true);
  });

  it('audioButtonNeedChange test', () => {
    // mock configs
    const configKeys = ['position', 'buttonSize', 'iconSize', 'playIcon', 'pauseIcon'];
    const config = {};
    const audioButtonConfig = {};
    for (let i = 0; i < configKeys.length; i += 1) {
      config[configKeys[i]] = configKeys[i];
      audioButtonConfig[configKeys[i]] = configKeys[i];
    }

    expect(audioButtonNeedChange([config, audioButtonConfig])).toBe(false);

    config[configKeys[0]] += 'aaa';
    expect(audioButtonNeedChange([config, audioButtonConfig])).toBe(true);
  });
});
