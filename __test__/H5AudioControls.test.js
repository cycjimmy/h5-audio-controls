import H5AudioControls from '../src/H5AudioControls';

const audioSrc = 'audioSrc';
const mockAddEventListener = (el) => {
  const event = {
    stopPropagation: () => {
      /* do nothing */
    }
  };
  el.addEventListener = (x, cb) => {
    el.mockClick = () => cb(event);
  };
};

describe('H5AudioControls test', () => {
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

  it('H5AudioControls default test', (done) => {
    document.body.style.position = 'static';

    const h5AudioControls = new H5AudioControls(audioSrc);

    mockAddEventListener(h5AudioControls.audioButtonInstance.getAudioButton());

    h5AudioControls.load().then(() => {
      expect(h5AudioControls.context).toBe(document.body);
      expect(h5AudioControls.audioInstance.isPlaying()).toBe(true);

      h5AudioControls.audioButtonInstance.getAudioButton().mockClick();
      expect(h5AudioControls.audioInstance.isPlaying()).toBe(false);

      h5AudioControls.audioButtonInstance.getAudioButton().mockClick();
      expect(h5AudioControls.audioInstance.isPlaying()).toBe(true);

      h5AudioControls.stop();
      expect(h5AudioControls.audioInstance.isPlaying()).toBe(false);

      h5AudioControls.play();
      expect(h5AudioControls.audioInstance.isPlaying()).toBe(true);

      h5AudioControls.pause();
      expect(h5AudioControls.audioInstance.isPlaying()).toBe(false);

      setTimeout(done, 500);
    });
  });

  it('H5AudioControls changeAudioSrc test', () => {
    const h5AudioControls = new H5AudioControls(audioSrc);

    return Promise.resolve()
      .then(() => h5AudioControls.changeAudioSrc())
      .then(() => h5AudioControls.changeAudioSrc(audioSrc))
      .then(() => {
        expect(h5AudioControls.config.audioSrc).toBe(audioSrc);
      });
  });

  it('H5AudioControls changePosition test', () => {
    const h5AudioControls = new H5AudioControls(audioSrc);
    const position = 'top-right';

    return h5AudioControls
      .load()
      .then(() => h5AudioControls.changePosition())
      .then(() => h5AudioControls.changePosition(position))
      .then(() => {
        expect(h5AudioControls.config.position).toBe(position);
      });
  });

  it('H5AudioControls changeButtonSize test', () => {
    const h5AudioControls = new H5AudioControls(audioSrc);
    const buttonSize = '15vw';

    return h5AudioControls
      .load()
      .then(() => h5AudioControls.changeButtonSize())
      .then(() => h5AudioControls.changeButtonSize(buttonSize))
      .then(() => {
        expect(h5AudioControls.config.buttonSize).toBe(buttonSize);

        // cover branch
        h5AudioControls.config.autoPlay = false;
        return h5AudioControls.changeButtonSize(buttonSize);
      });
  });

  it('H5AudioControls changeIconSize test', () => {
    const h5AudioControls = new H5AudioControls(audioSrc);
    const iconSize = '15vw';

    return h5AudioControls
      .load()
      .then(() => h5AudioControls.changeIconSize())
      .then(() => h5AudioControls.changeIconSize(iconSize))
      .then(() => {
        expect(h5AudioControls.config.iconSize).toBe(iconSize);
      });
  });

  it('H5AudioControls custom context test', () => {
    // mock custom context
    const mockContext = document.createElement('div');
    mockContext.id = 'mockContext';
    document.body.appendChild(mockContext);

    const h5AudioControls = new H5AudioControls(audioSrc, {
      context: `#${mockContext.id}`,
      autoPlay: false
    });

    return h5AudioControls.load().then(() => {
      expect(h5AudioControls.context).toBe(mockContext);
    });
  });
});
