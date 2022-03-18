import isAudioPlaying from '@cycjimmy/awesome-js-funcs/esm/media/isAudioPlaying';

export default class {
  /**
   * Audio
   * @param audioSrc
   */
  constructor({ audioSrc }) {
    this.config = {
      audioSrc,
    };

    this.audio = new Audio();
    this._init();
  }

  /**
   * getAudioButton
   * @returns {HTMLAudioElement}
   */
  getAudio() {
    return this.audio;
  }

  /**
   * play
   * @returns {HTMLAudioElement}
   */
  play() {
    const wxFakePlay = () => window.WeixinJSBridge.invoke('getNetworkType', {}, () => this.audio.play(), false);

    if (window.WeixinJSBridge) {
      wxFakePlay();
    } else {
      document.addEventListener('WeixinJSBridgeReady', () => this.audio.play(), false);
    }

    this.audio.play();
    return this.audio;
  }

  /**
   * pause
   * @returns {HTMLAudioElement}
   */
  pause() {
    this.audio.pause();
    return this.audio;
  }

  /**
   * stop
   * @returns {HTMLAudioElement}
   */
  stop() {
    this.audio.currentTime = 0;
    this.audio.pause();
    return this.audio;
  }

  /**
   * isPlaying
   * @returns {boolean}
   */
  isPlaying() {
    return isAudioPlaying(this.audio);
  }

  /**
   * canplay
   * @returns {Promise<>}
   */
  canplay() {
    return new Promise((resolve) => {
      this.audio.addEventListener('canplay', resolve);
    });
  }

  /**
   * init
   * @private
   */
  _init() {
    this.audio.src = this.config.audioSrc;
    this.audio.preload = 'auto';
    this.audio.loop = true;
  }
}
