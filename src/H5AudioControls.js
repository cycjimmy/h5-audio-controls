import isString from '@cycjimmy/awesome-js-funcs/judgeBasic/isString';
import getElementStyle from '@cycjimmy/awesome-js-funcs/dom/getElementStyle';
import functionToPromise from '@cycjimmy/awesome-js-funcs/typeConversion/functionToPromise';

import { isLegalConfigKey, audioButtonNeedChange } from './tools';
import Audio from './Audio';
import AudioButton from './AudioButton';

/**
 * H5AudioControls
 *
 * Function:
 * load
 * play
 * pause
 * stop
 * changeButtonUI
 * isPlaying
 */
export default class {
  /**
   * H5AudioControls
   * @param audioSrc
   * @param context default: body
   * @param position 'left-top'|'top-right'(default)|'right-bottom'|'left-bottom'
   * @param buttonSize
   * @param iconSize
   * @param playIcon
   * @param pauseIcon
   * @param autoPlay default: true
   */
  constructor(
    audioSrc,
    {
      context = document.body,
      position = 'top-right',
      buttonSize,
      iconSize,
      playIcon,
      pauseIcon,
      autoPlay = true
    } = {}
  ) {
    this.config = {
      audioSrc,
      position,
      buttonSize,
      iconSize,
      playIcon,
      pauseIcon,
      autoPlay
    };

    this.state = {
      isAudioButtonChanging: false
    };

    this.setContext(context);
    this._init();
  }

  /**
   * setContext
   * @param context
   */
  setContext(context) {
    this.context = isString(context) ? document.querySelector(context) : context;
    return this;
  }

  /**
   * Load
   * @returns {Promise<void>}
   */
  load() {
    return this.appendAudioButton().then(() =>
      functionToPromise(() => {
        if (this.config.autoPlay) {
          this.play();
        }
      })
    );
  }

  /**
   * play
   */
  play() {
    this.audioInstance.play();
    setTimeout(() => this.changeButtonUI(), 0);
  }

  /**
   * pause
   */
  pause() {
    this.audioInstance.pause();
    setTimeout(() => this.changeButtonUI(), 0);
  }

  /**
   * stop
   */
  stop() {
    this.audioInstance.stop();
    setTimeout(() => this.changeButtonUI(), 0);
  }

  /**
   * changeButtonUI
   */
  changeButtonUI() {
    if (this.isPlaying()) {
      this.audioButtonInstance.changeUIToPlay();
    } else {
      this.audioButtonInstance.changeUIToPause();
    }
  }

  /**
   * dynamically change the value of configuration properties
   * @param key
   * @param val
   * @returns {Promise<void>}
   */
  change(key, val) {
    if (!isLegalConfigKey(key)) {
      return Promise.resolve();
    }

    if (typeof val === 'undefined') {
      return Promise.resolve();
    }

    this.config[key] = val;

    if (key === 'autoPlay') {
      return Promise.resolve();
    }

    if (key === 'audioSrc') {
      return Promise.resolve()
        .then(() =>
          functionToPromise(() => {
            this.stop();
            this._initAudioInstance();
          })
        )
        .then(() =>
          functionToPromise(() => {
            if (this.config.autoPlay) {
              this.play();
            }
          })
        );
    }

    if (this.state.isAudioButtonChanging) {
      return Promise.resolve()
        .then(() => functionToPromise(() => {}, 10))
        .then(() => this.change(key, val));
    }

    this.state.isAudioButtonChanging = true;

    return Promise.resolve().then(() => {
      if (!audioButtonNeedChange([this.config, this.audioButtonInstance.config])) {
        return Promise.resolve();
      }

      return Promise.resolve()
        .then(() => this.repaintAudioButton())
        .then(() =>
          functionToPromise(() => {
            this.state.isAudioButtonChanging = false;
          })
        );
    });
  }

  /**
   * changeAudioSrc
   * @param src
   * @returns {Promise<void>}
   */
  changeAudioSrc(src) {
    return this.change('audioSrc', src);
  }

  /**
   * changePosition
   * @param position
   * @returns {Promise<void>}
   */
  changePosition(position) {
    return this.change('position', position);
  }

  /**
   * changeButtonSize
   * @param size
   * @returns {Promise<void>}
   */
  changeButtonSize(size) {
    return this.change('buttonSize', size);
  }

  /**
   * changeIconSize
   * @param size
   * @returns {Promise<void>}
   */
  changeIconSize(size) {
    return this.change('iconSize', size);
  }

  /**
   * isPlaying
   * @returns {boolean}
   */
  isPlaying() {
    return this.audioInstance.isPlaying();
  }

  /**
   * eventBind
   */
  eventBind() {
    this.audioButtonInstance.getAudioButton().addEventListener('click', (e) => {
      e.stopPropagation();

      if (this.isPlaying()) {
        this.pause();
        return;
      }
      this.play();
    });

    return this;
  }

  /**
   * Repaint AudioButton
   * @returns {Promise<void>}
   */
  repaintAudioButton() {
    return Promise.resolve()
      .then(() =>
        functionToPromise(() => {
          this.context.removeChild(this.audioButtonInstance.getAudioButton());
        })
      )
      .then(() =>
        functionToPromise(() => {
          this._initAudioButtonInstance();
        })
      )
      .then(() => this.appendAudioButton());
  }

  /**
   * appendAudioButton
   * @returns {Promise<void>}
   */
  appendAudioButton() {
    return Promise.resolve().then(() =>
      functionToPromise(() => {
        this.context.appendChild(this.audioButtonInstance.getAudioButton());
        this.changeButtonUI();
        this.eventBind();
      })
    );
  }

  /**
   * Init
   * @private
   */
  _init() {
    this._fixContextPosition();
    this._initAudioInstance();
    this._initAudioButtonInstance();
  }

  /**
   * InitAudioInstance
   * @private
   */
  _initAudioInstance() {
    this.audioInstance = new Audio({
      audioSrc: this.config.audioSrc
    });

    return this;
  }

  /**
   * InitAudioButtonInstance
   * @private
   */
  _initAudioButtonInstance() {
    this.audioButtonInstance = new AudioButton({
      buttonSize: this.config.buttonSize,
      position: this.config.position,
      iconSize: this.config.iconSize,
      playIcon: this.config.playIcon,
      pauseIcon: this.config.pauseIcon
    });

    return this;
  }

  /**
   * fix context position
   * @private
   */
  _fixContextPosition() {
    if (getElementStyle(this.context, 'position') === 'static') {
      this.context.style.position = 'relative';
    }

    return this;
  }
}
