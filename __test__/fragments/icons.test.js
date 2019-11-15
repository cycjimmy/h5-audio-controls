import {
  ePlayIcon,
  ePauseIcon,
} from '../../src/fragments/icons';

describe('icons test', () => {
  it('ePlayIcon default test', () => {
    const eIcon = ePlayIcon({});
    expect(eIcon).toBeTruthy();
  });

  it('ePauseIcon default test', () => {
    const eIcon = ePauseIcon({});
    expect(eIcon).toBeTruthy();
  });

  it('ePauseIcon test', () => {
    const size = '10px';
    const iconUrl = './img.svg';

    const eIcon = ePauseIcon({
      iconUrl,
      size,
    });

    expect(eIcon.style.width).toBe(size);
    expect(eIcon.style.backgroundImage).toBe(`url(${iconUrl})`);
  });
});
