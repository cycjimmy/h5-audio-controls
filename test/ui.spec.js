import H5AudioControls from '../build/h5-audio-controls.min';

describe('ui spec', () => {
  const
    audioContext = document.createElement('div')
    , audioSrc = 'https://cycjimmy.github.io/staticFiles/media/Richard_Clayderman-LOVE_IS_BLUE.mp3'
  ;

  audioContext.id = 'audioContext';

  const
    audioDefault = new H5AudioControls(audioSrc)
    , audio1 = new H5AudioControls(audioSrc, {
      context: audioContext,
      position: 'left-top',
    })
  ;

  test('Default Config Test', () => {
    expect(audioDefault.config.context).toBe(document.body);
    expect(audioDefault.config.position).toBe('top-right');
  });

  test('Custom Config Test', () => {
    expect(audio1.config.context.id).toBe('audioContext');
    expect(audio1.config.position).toBe('left-top');
  });
});
