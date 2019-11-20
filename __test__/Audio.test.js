import Audio from '../src/Audio';

describe('Audio test', () => {
  beforeAll(() => {
    // mock audio events
    window.HTMLMediaElement.prototype.load = () => {
      /* do nothing */
    };
    window.HTMLMediaElement.prototype.play = function() {
      Object.defineProperty(this, 'paused', {
        configurable: true,
        get() {
          return false;
        }
      });
    };
    window.HTMLMediaElement.prototype.pause = function() {
      Object.defineProperty(this, 'paused', {
        configurable: true,
        get() {
          return true;
        }
      });
    };
  });

  const audioSrc =
    'https://cycjimmy.github.io/staticFiles/media/Richard_Clayderman-LOVE_IS_BLUE.mp3';
  const audio = new Audio({ audioSrc });

  it('audio default test', () => {
    expect(audio.config.audioSrc).toBe(audioSrc);
    expect(audio.getAudio()).toBe(audio.audio);
  });

  it('audio play event test', () => {
    // mock addEventListener
    document.addEventListener = (x, cb) => cb();

    audio.play();
  });

  it('audio play event test(has WeixinJSBridge)', () => {
    // mock WeixinJSBridge
    window.WeixinJSBridge = {
      invoke: (x, y, cb) => cb()
    };

    audio.play();
  });

  it('audio pause event test', () => {
    audio.pause();
  });

  it('audio stop event test', () => {
    audio.play();
    audio.stop();
  });

  it('audio isPlaying return boolean', () => {
    audio.play();
    expect(audio.isPlaying()).toBe(true);
    audio.pause();
    expect(audio.isPlaying()).toBe(false);
    audio.play();
    expect(audio.isPlaying()).toBe(true);
    audio.stop();
    expect(audio.isPlaying()).toBe(false);
  });
});
