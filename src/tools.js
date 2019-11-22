/**
 * isLegalConfigKey
 * @param key
 * @returns {boolean}
 */
export const isLegalConfigKey = (key) => {
  const configKeys = [
    'audioSrc',
    'position',
    'buttonSize',
    'iconSize',
    'playIcon',
    'pauseIcon',
    'autoPlay'
  ];

  for (let i = 0; i < configKeys.length; i++) {
    if (key === configKeys[i]) {
      return true;
    }
  }

  return false;
};

/**
 * audioButton Need Change
 * @param config
 * @param audioButtonConfig
 * @returns {boolean}
 */
export const audioButtonNeedChange = ([config, audioButtonConfig]) => {
  const configKeys = ['position', 'buttonSize', 'iconSize', 'playIcon', 'pauseIcon'];

  for (let i = 0; i < configKeys.length; i++) {
    if (config[configKeys[i]] !== audioButtonConfig[configKeys[i]]) {
      return true;
    }
  }

  return false;
};
