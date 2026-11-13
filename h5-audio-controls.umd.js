;(function(){try{if(typeof document!='undefined'){var e=document.createElement('style');e.appendChild(document.createTextNode(".index-module__music-control-wrapper{z-index:999;cursor:pointer;-webkit-tap-highlight-color:rgba(255,0,0,0);touch-action:manipulation;border:none;outline:none;justify-content:center;align-items:center;width:15vw;max-width:60px;height:15vw;max-height:60px;display:flex;position:fixed}.index-module__music-control-wrapper.left-top{top:0;left:0}.index-module__music-control-wrapper.top-right{top:0;right:0}.index-module__music-control-wrapper.right-bottom{bottom:0;right:0}.index-module__music-control-wrapper.left-bottom{bottom:0;left:0}@keyframes index-module__reverse-rotate{0%{transform:rotate(0)}to{transform:rotate(-360deg)}}.index-module__pause-icon,.index-module__play-icon{width:60%;height:60%;display:block}.index-module__play-icon{background:url(\"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cstyle%3e.st1{fill-rule:evenodd;clip-rule:evenodd;fill:%23fff}%3c/style%3e%3cpath%20d='M32%202.8C15.9%202.8%202.8%2015.9%202.8%2032S15.9%2061.2%2032%2061.2%2061.2%2048.1%2061.2%2032%2048.1%202.8%2032%202.8z'%20opacity='.2'%20fill-rule='evenodd'%20clip-rule='evenodd'/%3e%3cpath%20class='st1'%20d='M32%200C14.3%200%200%2014.3%200%2032s14.3%2032%2032%2032%2032-14.3%2032-32S49.7%200%2032%200zm0%2061.2C15.9%2061.2%202.8%2048.1%202.8%2032S15.9%202.8%2032%202.8%2061.2%2015.9%2061.2%2032%2048.1%2061.2%2032%2061.2z'/%3e%3cpath%20class='st1'%20d='M30.3%2011.2l-2.1.6L36.1%2039c-5.6-.8-10.5%204-10.1%208.7.1%201.6%201.3%202.9%202%203.5%204%203.4%209.4-.2%2011.3-5.7.8-2.3.4-4-.8-8.1l-4.9-16.9c2.5-.8%207.7%201%209.4%203.5%201.1%201.6%201.8%203.9%201.4%205.8-.1.5-.4%202%200%201.7.7-.6.9-1.2%201.3-2.4.3-1.1.4-2.7.3-3.7-1.6-10-12.7-7.1-15.7-14.2z'/%3e%3c/svg%3e\") 0 0/100% 100% no-repeat;animation:2s linear infinite index-module__reverse-rotate}.index-module__pause-icon{background:url(\"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3e%3cpath%20d='M32%202.8C15.9%202.8%202.8%2015.9%202.8%2032S15.9%2061.2%2032%2061.2%2061.2%2048.1%2061.2%2032%2048.1%202.8%2032%202.8z'%20opacity='.2'%20fill-rule='evenodd'%20clip-rule='evenodd'/%3e%3cpath%20d='M32%200C14.3%200%200%2014.3%200%2032s14.3%2032%2032%2032%2032-14.3%2032-32S49.7%200%2032%200zM2.8%2032C2.8%2015.9%2015.9%202.8%2032%202.8c7.7%200%2014.6%203%2019.9%207.8L10.6%2051.9C5.7%2046.6%202.8%2039.7%202.8%2032zM32%2061.2c-7.7%200-14.6-3-19.9-7.8l41.3-41.3c4.8%205.2%207.8%2012.2%207.8%2019.9%200%2016.1-13.1%2029.2-29.2%2029.2z'%20fill='%23fff'/%3e%3cpath%20d='M30.3%2011.2l-2.1.6L36.1%2039c-5.6-.8-10.5%204-10.1%208.7.1%201.6%201.3%202.9%202%203.5%204%203.4%209.4-.2%2011.3-5.7.8-2.3.4-4-.8-8.1l-4.9-16.9c2.5-.8%207.7%201%209.4%203.5%201.1%201.6%201.8%203.9%201.4%205.8-.1.5-.4%202%200%201.7.7-.6.9-1.2%201.3-2.4.3-1.1.4-2.7.3-3.7-1.6-10-12.7-7.1-15.7-14.2z'%20fill-rule='evenodd'%20clip-rule='evenodd'%20fill='%23fff'/%3e%3c/svg%3e\") 0 0/100% 100% no-repeat}"));document.head.appendChild(e)}}catch(t){console.error('inject-css',t)}})();
(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define([], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.h5AudioControls = factory());
})(this, function() {
	// node_modules/@cycjimmy/awesome-js-funcs/dist/designPattern/CreateInstance.js
	/**
	* singleton constructor(design patterns)
	* @returns {function(*=)}
	* @constructor
	*/
	var CreateInstance_default = () => {
		let instance;
		return (newInstance) => {
			if (newInstance) instance = newInstance;
			return instance;
		};
	};
	// node_modules/@cycjimmy/awesome-js-funcs/dist/judgeBasic/isString.js
	/**
	* determine a string type
	* @param str
	* @returns {boolean}
	*/
	var isString_default = (str) => typeof str === "string" && str.constructor === String;
	// node_modules/@cycjimmy/awesome-js-funcs/dist/judgeBasic/isPromise.js
	/**
	* determine a promise type
	* @param promise
	* @returns {boolean}
	*/
	var isPromise_default = (promise) => Object.prototype.toString.call(promise).slice(8, -1) === "Promise";
	// node_modules/@cycjimmy/awesome-js-funcs/dist/typeConversion/functionToPromise.js
	/**
	* function to promise
	* @param normalFunction
	* @param timeout
	* @returns {Promise<any>}
	*/
	var functionToPromise_default = (normalFunction, timeout = 0) => {
		if (isPromise_default(normalFunction)) return normalFunction;
		return new Promise((resolve) => {
			normalFunction();
			setTimeout(resolve, timeout);
		});
	};
	// node_modules/@cycjimmy/awesome-js-funcs/dist/media/isAudioPlaying.js
	/**
	* isAudioPlaying
	* @param audio
	*/
	var isAudioPlaying_default = (audio) => !audio.paused;
	// src/Audio.js
	var Audio_default = class {
		/**
		* Audio
		* @param audioSrc
		*/
		constructor({ audioSrc }) {
			this.config = { audioSrc };
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
			const wxFakePlay = () => window.WeixinJSBridge.invoke("getNetworkType", {}, () => this.audio.play(), false);
			if (window.WeixinJSBridge) wxFakePlay();
			else document.addEventListener("WeixinJSBridgeReady", () => this.audio.play(), false);
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
			return isAudioPlaying_default(this.audio);
		}
		/**
		* canplay
		* @returns {Promise<>}
		*/
		canplay() {
			return new Promise((resolve) => {
				this.audio.addEventListener("canplay", resolve);
			});
		}
		/**
		* init
		* @private
		*/
		_init() {
			this.audio.src = this.config.audioSrc;
			this.audio.preload = "auto";
			this.audio.loop = true;
		}
	};
	var index_module_default = {
		musicControlWrapper: "index-module__music-control-wrapper",
		pauseIcon: "index-module__pause-icon",
		playIcon: "index-module__play-icon",
		reverseRotate: "index-module__reverse-rotate"
	};
	// src/fragments/icons.js
	/**
	* fragmentIcon
	* @param iconUrl
	* @param className
	* @param size
	* @returns {HTMLSpanElement}
	*/
	function eIcon({ iconUrl, className, size }) {
		const icon = document.createElement("span");
		let cssText = "";
		icon.classList.add(className);
		if (iconUrl) cssText += `background-image: url(${iconUrl}); `;
		if (size) cssText += `width: ${size}; height: ${size}`;
		icon.style.cssText = cssText;
		return icon;
	}
	/**
	* playIcon
	* @param iconUrl
	* @param size
	* @returns {HTMLSpanElement}
	*/
	var ePlayIcon = ({ iconUrl, size = "" }) => eIcon({
		iconUrl,
		className: index_module_default.playIcon,
		size
	});
	/**
	* pauseIcon
	* @param iconUrl
	* @param size
	* @returns {HTMLSpanElement}
	*/
	var ePauseIcon = ({ iconUrl, size = "" }) => eIcon({
		iconUrl,
		className: index_module_default.pauseIcon,
		size
	});
	// src/AudioButton.js
	var AudioButton_default = class {
		/**
		* AudioButton
		* @param buttonSize
		* @param position
		* @param positionType 'fixed'|'absolute'|'relative'|'sticky'|'static' default: 'fixed'
		* @param iconSize
		* @param playIcon
		* @param pauseIcon
		*/
		constructor({ position = "top-right", positionType = "fixed", buttonSize = "", iconSize = "", playIcon = "", pauseIcon = "" }) {
			this.config = {
				buttonSize,
				position,
				positionType,
				iconSize,
				playIcon,
				pauseIcon
			};
			this.buttonSize = isString_default(this.config.buttonSize) ? this.config.buttonSize : `${this.config.buttonSize}px`;
			this.iconSize = isString_default(this.config.iconSize) ? this.config.iconSize : `${this.config.iconSize}px`;
			this.audioButton = document.createElement("a");
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
		* @returns {
		* HTMLAnchorElement |
		*   {
		*      changeUIToPlay(): void,
		*      _init(): void,
		*      getAudioButton(): *,
		*      changeUIToPause(): void
		*   }
		* }
		*/
		getAudioButton() {
			return this.audioButton;
		}
		/**
		* changeUIToPlay
		*/
		changeUIToPlay() {
			if (this.audioButton.contains(this.pauseIcon)) this.audioButton.removeChild(this.pauseIcon);
			this.audioButton.appendChild(this.playIcon);
		}
		/**
		* changeUIToPause
		*/
		changeUIToPause() {
			if (this.audioButton.contains(this.playIcon)) this.audioButton.removeChild(this.playIcon);
			this.audioButton.appendChild(this.pauseIcon);
		}
		/**
		* init
		* @private
		*/
		_init() {
			this.audioButton.classList.add(index_module_default.musicControlWrapper, this.config.position);
			if (!this.buttonSize) {
				const shortW = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
				this.buttonSize = `${shortW * .15}px`;
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
			switch (this.config.positionType) {
				case "static":
				case "relative":
				case "absolute":
				case "sticky": this.audioButton.style.position = this.config.positionType;
			}
		}
	};
	// src/tools.js
	/**
	* isLegalConfigKey
	* @param key
	* @returns {boolean}
	*/
	function isLegalConfigKey(key) {
		const configKeys = [
			"audioSrc",
			"position",
			"buttonSize",
			"iconSize",
			"playIcon",
			"pauseIcon",
			"autoPlay"
		];
		for (let i = 0; i < configKeys.length; i += 1) if (key === configKeys[i]) return true;
		return false;
	}
	/**
	* audioButton Need Change
	* @param config
	* @param audioButtonConfig
	* @returns {boolean}
	*/
	function audioButtonNeedChange([config, audioButtonConfig]) {
		const configKeys = [
			"position",
			"buttonSize",
			"iconSize",
			"playIcon",
			"pauseIcon"
		];
		for (let i = 0; i < configKeys.length; i += 1) if (config[configKeys[i]] !== audioButtonConfig[configKeys[i]]) return true;
		return false;
	}
	// src/H5AudioControls.js
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
	var H5AudioControls_default = class {
		/**
		* H5AudioControls
		* @param audioSrc
		* @param context default: body
		* @param position 'left-top'|'top-right'(default)|'right-bottom'|'left-bottom'
		* @param positionType 'fixed'|'absolute'|'relative'|'sticky'|'static' default: 'fixed'
		* @param buttonSize
		* @param iconSize
		* @param playIcon
		* @param pauseIcon
		* @param autoPlay default: true
		*/
		constructor(audioSrc, { context = document.body, position = "top-right", positionType = "fixed", buttonSize = "", iconSize = "", playIcon = "", pauseIcon = "", autoPlay = true } = {}) {
			this.config = {
				audioSrc,
				position,
				positionType,
				buttonSize,
				iconSize,
				playIcon,
				pauseIcon,
				autoPlay
			};
			this.state = { isAudioButtonChanging: false };
			this.setContext(context);
			this._init();
		}
		/**
		* setContext
		* @param context
		*/
		setContext(context) {
			this.context = isString_default(context) ? document.querySelector(context) : context;
			return this;
		}
		/**
		* Load
		* @returns {Promise<void>}
		*/
		load() {
			return this.appendAudioButton().then(() => functionToPromise_default(() => {
				if (this.config.autoPlay) {
					this.play();
					this.audioInstance.canplay().then(() => {
						this.changeButtonUI();
					});
				}
			}));
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
			if (this.isPlaying()) this.audioButtonInstance.changeUIToPlay();
			else this.audioButtonInstance.changeUIToPause();
		}
		/**
		* dynamically change the value of configuration properties
		* @param key
		* @param val
		* @returns {Promise<void>}
		*/
		change(key, val) {
			if (!isLegalConfigKey(key)) return Promise.resolve();
			if (typeof val === "undefined") return Promise.resolve();
			this.config[key] = val;
			if (key === "autoPlay") return Promise.resolve();
			if (key === "audioSrc") return Promise.resolve().then(() => functionToPromise_default(() => {
				this.stop();
				this._initAudioInstance();
			})).then(() => functionToPromise_default(() => {
				if (this.config.autoPlay) this.play();
			}));
			if (this.state.isAudioButtonChanging) return Promise.resolve().then(() => functionToPromise_default(() => {}, 10)).then(() => this.change(key, val));
			this.state.isAudioButtonChanging = true;
			return Promise.resolve().then(() => {
				if (!audioButtonNeedChange([this.config, this.audioButtonInstance.config])) {
					this.state.isAudioButtonChanging = false;
					return Promise.resolve();
				}
				return Promise.resolve().then(() => this.repaintAudioButton()).then(() => functionToPromise_default(() => {
					this.state.isAudioButtonChanging = false;
				}));
			});
		}
		/**
		* changeAudioSrc
		* @param src
		* @returns {Promise<void>}
		*/
		changeAudioSrc(src) {
			return this.change("audioSrc", src);
		}
		/**
		* changePosition
		* @param position
		* @returns {Promise<void>}
		*/
		changePosition(position) {
			return this.change("position", position);
		}
		/**
		* changeButtonSize
		* @param size
		* @returns {Promise<void>}
		*/
		changeButtonSize(size) {
			return this.change("buttonSize", size);
		}
		/**
		* changeIconSize
		* @param size
		* @returns {Promise<void>}
		*/
		changeIconSize(size) {
			return this.change("iconSize", size);
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
			this.audioButtonInstance.getAudioButton().addEventListener("click", (e) => {
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
			return Promise.resolve().then(() => functionToPromise_default(() => {
				this.context.removeChild(this.audioButtonInstance.getAudioButton());
			})).then(() => functionToPromise_default(() => {
				this._initAudioButtonInstance();
			})).then(() => this.appendAudioButton());
		}
		/**
		* appendAudioButton
		* @returns {Promise<void>}
		*/
		appendAudioButton() {
			return Promise.resolve().then(() => functionToPromise_default(() => {
				this.context.appendChild(this.audioButtonInstance.getAudioButton());
				this.changeButtonUI();
				this.eventBind();
			}));
		}
		/**
		* Init
		* @private
		*/
		_init() {
			this._initAudioInstance();
			this._initAudioButtonInstance();
		}
		/**
		* InitAudioInstance
		* @private
		*/
		_initAudioInstance() {
			this.audioInstance = new Audio_default({ audioSrc: this.config.audioSrc });
			return this;
		}
		/**
		* InitAudioButtonInstance
		* @private
		*/
		_initAudioButtonInstance() {
			this.audioButtonInstance = new AudioButton_default({
				buttonSize: this.config.buttonSize,
				position: this.config.position,
				positionType: this.config.positionType,
				iconSize: this.config.iconSize,
				playIcon: this.config.playIcon,
				pauseIcon: this.config.pauseIcon
			});
			return this;
		}
	};
	// src/index.js
	var instance = CreateInstance_default();
	/**
	* h5AudioControls
	* @param param
	* @returns {H5AudioControls}
	*/
	var src_default = (...param) => {
		if (instance()) return instance();
		const h5AudioControls = new H5AudioControls_default(...param);
		instance(h5AudioControls);
		return h5AudioControls;
	};
	return src_default;
});
