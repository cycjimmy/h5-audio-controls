import CreateInstance from '@cycjimmy/awesome-js-funcs/esm/designPattern/CreateInstance';

import H5AudioControls from './H5AudioControls';

const instance = CreateInstance();

/**
 * h5AudioControls
 * @param param
 * @returns {H5AudioControls}
 */
export default (...param) => {
  if (instance()) {
    return instance();
  }

  const h5AudioControls = new H5AudioControls(...param);
  instance(h5AudioControls);

  return h5AudioControls;
};
