import _style from '../style/index.scss';

/**
 * fragmentIcon
 * @param iconUrl
 * @param className
 * @param size
 * @returns {HTMLSpanElement}
 */
const eIcon = ({ iconUrl, className, size }) => {
  const icon = document.createElement('span');
  let cssText = '';

  icon.classList.add(className);

  if (iconUrl) {
    cssText += `background-image: url(${iconUrl}); `;
  }

  if (size) {
    cssText += `width: ${size}; height: ${size}`;
  }

  icon.style.cssText = cssText;

  return icon;
};

/**
 * playIcon
 * @param iconUrl
 * @param size
 * @returns {HTMLSpanElement}
 */
export const ePlayIcon = ({ iconUrl, size = '' }) =>
  eIcon({ iconUrl, className: _style.playIcon, size });

/**
 * pauseIcon
 * @param iconUrl
 * @param size
 * @returns {HTMLSpanElement}
 */
export const ePauseIcon = ({ iconUrl, size = '' }) =>
  eIcon({ iconUrl, className: _style.pauseIcon, size });
