/* eslint no-undef: off */
import h5AudioControls from '../src/index';

describe('h5AudioControls test', () => {
  const audioSrc = 'https://cycjimmy.github.io/staticFiles/media/Richard_Clayderman-LOVE_IS_BLUE.mp3';

  const audioControls = h5AudioControls(audioSrc);

  it('Singleton mode: h5AudioControls() should be audioControls.', () => {
    expect(h5AudioControls()).toBe(audioControls);
  });
});
