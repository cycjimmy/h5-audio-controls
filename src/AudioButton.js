import isString from '@cycjimmy/awesome-js-funcs/judgeBasic/isString';

import _style from './style/index.scss';
import { ePlayIcon, ePauseIcon } from './fragments/icons';

export default class {
  /**
   * AudioButton
   * @param buttonSize
   * @param position
   * @param positionType 'fixed'|'absolute'|'relative'|'sticky'|'static' default: 'fixed'
   * @param iconSize
   * @param playIcon
   * @param pauseIcon
   */
  constructor({
    position = 'top-right',
    positionType = 'fixed',
    buttonSize = '',
    iconSize = '',
    playIcon = '',
    pauseIcon = ''
  }) {
    this.config = {
      buttonSize,
      position,
      positionType,
      iconSize,
      playIcon,
      pauseIcon
    };

    this.buttonSize = isString(this.config.buttonSize)
      ? this.config.buttonSize
      : `${this.config.buttonSize}px`;
    this.iconSize = isString(this.config.iconSize)
      ? this.config.iconSize
      : `${this.config.iconSize}px`;

    this.audioButton = document.createElement('a');
    this.playIcon = ePlayIcon({
      iconUrl: this.config.playIcon,
      size: this.iconSize
    });
    this.pauseIcon = ePauseIcon({
      iconUrl: this.config.pauseIcon,
      size: this.iconSize
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
    if (!this.buttonSize) {
      const shortW =
        window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
      this.buttonSize = `${shortW * 0.15}px`;
    }

    this.audioButton.style.cssText += `width: ${this.buttonSize}; height: ${this.buttonSize}`;

    this._setPositionType();
    this.changeUIToPlay();
  }

  /**
   * _setPositionType
   * @private
   */
  _setPositionType() {
    // eslint-disable-next-line default-case
    switch (this.config.positionType) {
      // 'fixed' is default in style
      case 'static':
      case 'relative':
      case 'absolute':
      case 'sticky':
        this.audioButton.style.position = this.config.positionType;
    }
  }
}
