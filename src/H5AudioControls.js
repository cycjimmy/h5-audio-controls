import isString from '@cycjimmy/awesome-js-funcs/judgeBasic/isString';
import getElementStyle from '@cycjimmy/awesome-js-funcs/dom/getElementStyle';
import functionToPromise from '@cycjimmy/awesome-js-funcs/typeConversion/functionToPromise';

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

    this.context = isString(context) ? document.querySelector(context) : context;
    this.els = {};

    this._init();
  }

  /**
   * Load
   * @returns {Promise<void>}
   */
  load() {
    return Promise.resolve().then(() =>
      functionToPromise(() => {
        this.context.appendChild(this.els.audioButton);
        this.changeButtonUI();
        this._eventBind();

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
    if (this.audioInstance.isPlaying()) {
      this.audioButtonInstance.changeUIToPlay();
    } else {
      this.audioButtonInstance.changeUIToPause();
    }
  }

  /**
   * Init
   * @private
   */
  _init() {
    this.audioInstance = new Audio({
      audioSrc: this.config.audioSrc
    });

    this.audioButtonInstance = new AudioButton({
      buttonSize: this.config.buttonSize,
      position: this.config.position,
      iconSize: this.config.iconSize,
      playIcon: this.config.playIcon,
      pauseIcon: this.config.pauseIcon
    });

    this.els.audioButton = this.audioButtonInstance.getAudioButton();

    // fix context position
    if (getElementStyle(this.context, 'position') === 'static') {
      this.context.style.position = 'relative';
    }
  }

  /**
   * eventBind
   * @private
   */
  _eventBind() {
    this.els.audioButton.addEventListener('click', (e) => {
      e.stopPropagation();

      if (this.audioInstance.isPlaying()) {
        this.pause();
        return;
      }
      this.play();
    });
  }
}
