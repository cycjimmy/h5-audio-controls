import AudioButton from '../src/AudioButton';

describe('AudioButton test', () => {
  it('AudioButton default test', () => {
    const audioButton = new AudioButton({});

    expect(audioButton.getAudioButton()).toBe(audioButton.audioButton);

    expect(audioButton.getAudioButton().contains(audioButton.playIcon)).toBe(true);
    expect(audioButton.getAudioButton().contains(audioButton.pauseIcon)).toBe(false);

    audioButton.changeUIToPause();
    expect(audioButton.getAudioButton().contains(audioButton.playIcon)).toBe(false);
    expect(audioButton.getAudioButton().contains(audioButton.pauseIcon)).toBe(true);

    audioButton.changeUIToPause();
    audioButton.changeUIToPlay();
    expect(audioButton.getAudioButton().contains(audioButton.playIcon)).toBe(true);
    expect(audioButton.getAudioButton().contains(audioButton.pauseIcon)).toBe(false);
  });

  it('AudioButton positionType test', () => {
    const positionTypeStatic = 'static';
    const positionTypeRelative = 'relative';
    const positionTypeAbsolute = 'absolute';
    const positionTypeSticky = 'sticky';

    const audioButton1 = new AudioButton({
      positionType: positionTypeStatic
    });
    const audioButton2 = new AudioButton({
      positionType: positionTypeRelative
    });
    const audioButton3 = new AudioButton({
      positionType: positionTypeAbsolute
    });
    const audioButton4 = new AudioButton({
      positionType: positionTypeSticky
    });

    expect(audioButton1.config.positionType).toBe(positionTypeStatic);
    expect(audioButton2.config.positionType).toBe(positionTypeRelative);
    expect(audioButton3.config.positionType).toBe(positionTypeAbsolute);
    expect(audioButton4.config.positionType).toBe(positionTypeSticky);
  });

  it('AudioButton buttonSize test', () => {
    const audioButton = new AudioButton({
      buttonSize: 2
    });

    expect(audioButton.buttonSize).toBe('2px');
  });

  it('AudioButton default buttonSize test', () => {
    // mock vertical screen
    window.innerWidth = 1;
    window.innerHeight = 2;

    const audioButton = new AudioButton({});

    expect(audioButton.buttonSize).toBe(`${window.innerWidth * 0.15}px`);
  });

  it('AudioButton iconSize test', () => {
    const audioButton = new AudioButton({
      iconSize: 1
    });

    expect(audioButton.iconSize).toBe('1px');
  });
});
