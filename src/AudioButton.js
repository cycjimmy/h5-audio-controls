import isString from '@cycjimmy/awesome-js-funcs/judgeBasic/isString';

import _style from './style/index.scss';
import { ePlayIcon, ePauseIcon } from './fragments/icons';

export default class {
  /**
   * AudioButton
   * @param buttonSize
   * @param position
   * @param iconSize
   * @param playIcon
   * @param pauseIcon
   */
  constructor({
    buttonSize = '',
    position = 'top-right',
    iconSize = '',
    playIcon = '',
    pauseIcon = ''
  }) {
    this.config = {
      buttonSize: isString(buttonSize) ? buttonSize : `${buttonSize}px`,
      position,
      iconSize: isString(iconSize) ? iconSize : `${iconSize}px`
    };

    this.audioButton = document.createElement('a');
    this.playIcon = ePlayIcon({
      iconUrl: playIcon,
      size: this.config.iconSize
    });
    this.pauseIcon = ePauseIcon({
      iconUrl: pauseIcon,
      size: this.config.iconSize
    });

    this._init();
  }

  /**
   * getAudioButton
   * @returns {HTMLAnchorElement | {changeUIToPlay(): void, _init(): void, getAudioButton(): *, changeUIToPause(): void}}
   */
  getAudioButton() {
    return this.audioButton;
  }

  /**
   * changeUIToPlay
   */
  changeUIToPlay() {
    if (this.audioButton.contains(this.pauseIcon)) {
      this.audioButton.removeChild(this.pauseIcon);
    }
    this.audioButton.appendChild(this.playIcon);
  }

  /**
   * changeUIToPause
   */
  changeUIToPause() {
    if (this.audioButton.contains(this.playIcon)) {
      this.audioButton.removeChild(this.playIcon);
    }
    this.audioButton.appendChild(this.pauseIcon);
  }

  /**
   * init
   * @private
   */
  _init() {
    this.audioButton.classList.add(_style.musicControlWrapper, this.config.position);

    // Init Button Size
    if (!this.config.buttonSize) {
      const shortW =
        window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
      this.config.buttonSize = `${shortW * 0.15}px`;
    }

    this.audioButton.style.cssText = `width: ${this.config.buttonSize}; height: ${this.config.buttonSize}`;

    this.changeUIToPlay();
  }
}
