import _style from './audio.scss';
import isString from '@cycjimmy/awesome-js-funcs/judgeBasic/isString';

/**
 * H5AudioControls
 * @param audioSrc
 * @param context default: body
 * @param position 'left-top'|'top-right'(default)|'right-bottom'|'left-bottom'
 *
 * Property:
 * audioSrc
 * config: {
 *   context
 *   position
 *   buttonSize
 *   picSize
 * }
 * audioElement: {
 *   audioButton
 *   audio
 *   audioPic
 * }
 *
 * Function:
 * load
 * play
 * pause
 * isPlaying
 * _changeUI
 * _changeUIToPlay
 * _changeUIToPause
 */
export default class H5AudioControls {
  constructor(audioSrc, {
    context = document.body,
    position = 'top-right',
    buttonSize = '',
    picSize = '',
    autoPlay = true,
  } = {}) {
    this.config = {
      context: isString(context)
        ? document.querySelector(context)
        : context,
      position: position,
      buttonSize: isString(buttonSize) ? buttonSize : buttonSize + 'px',
      picSize: isString(picSize) ? picSize : picSize + 'px',
      autoPlay: autoPlay,
    };

    this.config.context.style.position = 'relative';
    this.audioSrc = audioSrc;

    this.audioElement = {
      audioButton: document.createElement('a'),
      audio: null,
      audioPic: null,
    };
  };


  load() {
    return new Promise(resolve => {
      this.audioElement.audioButton.href = 'javascript:;';
      this.audioElement.audioButton.classList.add(_style.musicControlWrapper, this.config.position);

      this._initButtonSize();

      this.audioElement.audioButton.innerHTML = `
        <span class=${_style.musicControl} ${_style.play}>
          <audio style="display: none;" loop preload controls>
            <source src=${this.audioSrc} type="audio/mpeg">
          </audio>
        </span>
      `;

      this.config.context.appendChild(this.audioElement.audioButton);
      this.audioElement.audioPic = this.audioElement.audioButton.querySelector('.' + _style.musicControl);
      this.audioElement.audio = this.audioElement.audioPic.querySelector('audio');

      this._initAudioPic();
      this._changeUI();
      this.eventBind();

      if (this.config.autoPlay) {
        this.play();
      }

      setTimeout(resolve, 0);
    });

  };

  eventBind() {
    this.audioElement.audioButton.addEventListener('click', e => {
      e.stopPropagation();

      if (this.audioElement.audioPic.classList.contains(_style.play)) {
        // 正在播放
        this.pause();
      } else {
        // 暂停中
        this.play();
      }
    });
  };

  _initButtonSize() {
    if (!this.config.buttonSize) {
      const shortW = window.innerWidth > window.innerHeight
        ? window.innerHeight
        : window.innerWidth;
      this.config.buttonSize = shortW * .15 + 'px';
    }

    this.audioElement.audioButton.style.cssText = 'width: ' + this.config.buttonSize
      + '; height: ' + this.config.buttonSize;
  };

  _initAudioPic() {
    if (this.config.picSize) {
      this.audioElement.audioPic.style.cssText = 'width: ' + this.config.picSize
        + '; height: ' + this.config.picSize;
    }
  }

  _play() {
    this.audioElement.audio.play();
    setTimeout(() => this._changeUI(), 0);
  }

  play() {
    const wxFakePlay = () => WeixinJSBridge.invoke('getNetworkType', {}, () => this._play(), false);

    if (window.WeixinJSBridge) {
      wxFakePlay();
    } else {
      document.addEventListener('WeixinJSBridgeReady', () => wxFakePlay(), false);
    }

    this._play();
  };

  pause() {
    this.audioElement.audio.pause();
    setTimeout(() => this._changeUI(), 0);
  };

  stop() {
    this.audioElement.audio.currentTime = 0;
    this.audioElement.audio.pause();
    setTimeout(() => this._changeUI(), 0);
  };

  _changeUIToPlay() {
    this.audioElement.audioPic.classList.remove(_style.pause);
    this.audioElement.audioPic.classList.add(_style.play);
  };

  _changeUIToPause() {
    this.audioElement.audioPic.classList.remove(_style.play);
    this.audioElement.audioPic.classList.add(_style.pause);
  };

  _changeUI() {
    if (this.isPlaying()) {
      this._changeUIToPlay();
    } else {
      this._changeUIToPause();
    }
  };

  isPlaying() {
    return !this.audioElement.audio.paused;
  };
};

