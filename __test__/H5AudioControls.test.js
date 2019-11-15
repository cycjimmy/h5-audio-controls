import H5AudioControls from '../src/H5AudioControls';

const audioSrc = 'audioSrc';
const mockAddEventListener = (el) => {
  const event = {
    stopPropagation: () => {/* do nothing */
    }
  };
  el.addEventListener = (x, cb) => {
    el.mockClick = () => cb(event);
  };
};

describe('H5AudioControls test', () => {
  beforeAll(() => {
    // mock audio events
    window.HTMLMediaElement.prototype.load = () => {/* do nothing */
    };
    window.HTMLMediaElement.prototype.play = function () {
      Object.defineProperty(this, 'paused', {
        configurable: true,
        get() {
          return false;
        }
      });
    };
    window.HTMLMediaElement.prototype.pause = function () {
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

    mockAddEventListener(h5AudioControls.els.audioButton);

    h5AudioControls.load()
      .then(() => {
        expect(h5AudioControls.context).toBe(document.body);
        expect(h5AudioControls.audioInstance.isPlaying()).toBe(true);

        h5AudioControls.els.audioButton.mockClick();
        expect(h5AudioControls.audioInstance.isPlaying()).toBe(false);

        h5AudioControls.els.audioButton.mockClick();
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

  it('H5AudioControls custom context test', () => {
    // mock custom context
    const mockContext = document.createElement('div');
    mockContext.id = 'mockContext';
    document.body.appendChild(mockContext);

    const h5AudioControls = new H5AudioControls(audioSrc, {
      context: `#${mockContext.id}`,
      autoPlay: false,
    });

    return h5AudioControls.load()
      .then(() => {
        expect(h5AudioControls.context).toBe(mockContext);
      });
  });
});
