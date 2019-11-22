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
