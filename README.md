# H5 Audio Controls
![][workflows-badge-image]
[![build status][travis-image]][travis-url]
[![libraries dependency status][libraries-status-image]][libraries-status-url]
[![libraries sourcerank][libraries-sourcerank-image]][libraries-sourcerank-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Release date][release-date-image]][release-url]
[![rollup][rollup-image]][rollup-url]
[![semantic-release][semantic-image]][semantic-url]
[![jest][jest-image]][jest-url]
[![npm license][license-image]][download-url]

* Simple h5 music controller [Demo][github-pages-url]

## How to use
### Install
[![NPM version][npm-image]][npm-url]
[![NPM bundle size][npm-bundle-size-image]][npm-url]
[![npm download][download-image]][download-url]

```shell
$ npm install @cycjimmy/h5-audio-controls --save
# or
$ yarn add @cycjimmy/h5-audio-controls
```

### Usage
```javascript
import h5AudioControls from '@cycjimmy/h5-audio-controls';
# OR
const h5AudioControls = require('@cycjimmy/h5-audio-controls');
```

```javascript
h5AudioControls(audioSrc [, options])
```

* `audioSrc`: [Require][string] a url to an audio file
* The `options` supports:
  * `context`: [Option][string|element] the context of audio controller. Default `document.body`.
  * `position`: [Option][string] the position of audio controller.
    * Choose one of the four options:
      * `'left-top'`
      * `'top-right'`(Default)
      * `'right-bottom'`
      * `'left-bottom'`
  * `buttonSize`: [Option][string|number] Set button wrapper size.
  * `iconSize`: [Option][string|number] Set button icon size.
  * `playIcon`: [Option][string] Set play icon.
  * `pauseIcon`: [Option][string] Set pause icon.
  * `autoPlay`: [Option][boolean] Whether to play immediately after loading. Default `true`.

* `h5AudioControls` instance supports the following methods:
  * `load()`: Init controller.
  * `play()`: Play the audio.
  * `pause()`: Pause the audio.
  * `stop()`: Stop the audio.
  * `isPlaying()`: Return whether the audio is playing.
  * `changeAudioSrc(src)`: Dynamically modify the value of `audioSrc`.
  * `changePosition(position)`: Dynamically modify the value of `position`.
  * `changeButtonSize(size)`: Dynamically modify the value of `buttonSize`.
  * `changeIconSize(size)`: Dynamically modify the value of `iconSize`.
  * `change(key, val)`: Dynamically change the value of configuration properties. 
    * Supports the following keys: 
      * `'audioSrc'`: Change the value of `audioSrc`. `change('audioSrc', 'yourSrc')` is the same as `changeAudioSrc('yourSrc')`
      * `'position'`: Change the value of `position`. `change('position', 'left-top')` is the same as `changePosition('left-top')`
      * `'buttonSize'`: Change the value of `buttonSize`. `change('buttonSize', '16vw')` is the same as `changeButtonSize('16vw')`
      * `'iconSize'`: Change the value of `iconSize`. `change('iconSize', '10vw')` is the same as `changeIconSize('10vw')`
      * `'playIcon'`: Change the value of `playIcon`.
      * `'pauseIcon'`: Change the value of `pauseIcon`.
      * `'autoPlay'`: Change the value of `autoPlay`.

### Use in browser
```html
<script src="h5-audio-controls.umd.min.js"></script>
<script>
  var audioSrc = '../media/test_audio.mp3';
  h5AudioControls(audioSrc).load();
</script>
```

## CDN
[![jsdelivr][jsdelivr-image]][jsdelivr-url]

To use via a CDN include this in your html:
```text
<script src="https://cdn.jsdelivr.net/npm/@cycjimmy/h5-audio-controls@3/dist/h5-audio-controls.umd.min.js"></script>
```

<!-- Links: -->
[npm-image]: https://img.shields.io/npm/v/@cycjimmy/h5-audio-controls
[npm-url]: https://npmjs.org/package/@cycjimmy/h5-audio-controls
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/min/@cycjimmy/h5-audio-controls

[download-image]: https://img.shields.io/npm/dt/@cycjimmy/h5-audio-controls
[download-url]: https://npmjs.org/package/@cycjimmy/h5-audio-controls

[jsdelivr-image]: https://img.shields.io/jsdelivr/npm/hy/@cycjimmy/h5-audio-controls
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@cycjimmy/h5-audio-controls

[workflows-badge-image]: https://github.com/cycjimmy/h5-audio-controls/workflows/Test%20CI/badge.svg
[travis-image]: https://img.shields.io/travis/cycjimmy/h5-audio-controls
[travis-url]: https://travis-ci.org/cycjimmy/h5-audio-controls

[libraries-status-image]: https://img.shields.io/librariesio/release/npm/@cycjimmy/h5-audio-controls
[libraries-sourcerank-image]: https://img.shields.io/librariesio/sourcerank/npm/@cycjimmy/h5-audio-controls
[libraries-status-url]: https://libraries.io/github/cycjimmy/h5-audio-controls
[libraries-sourcerank-url]: https://libraries.io/npm/@cycjimmy%2Fh5-audio-controls

[coverage-image]: https://img.shields.io/coveralls/github/cycjimmy/h5-audio-controls
[coverage-url]: https://coveralls.io/github/cycjimmy/h5-audio-controls

[release-date-image]: https://img.shields.io/github/release-date/cycjimmy/h5-audio-controls
[release-url]: https://github.com/cycjimmy/h5-audio-controls/releases

[rollup-image]: https://img.shields.io/github/package-json/dependency-version/cycjimmy/h5-audio-controls/dev/rollup
[rollup-url]: https://github.com/rollup/rollup

[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

[jest-image]: https://img.shields.io/badge/tested_with-jest-99424f.svg
[jest-url]: https://github.com/facebook/jest

[license-image]: https://img.shields.io/npm/l/@cycjimmy/h5-audio-controls

[github-pages-url]: https://cycjimmy.github.io/h5-audio-controls/
