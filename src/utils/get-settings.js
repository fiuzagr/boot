import cloneDeep from 'lodash/cloneDeep';
import get from 'lodash/get';

export default context => (from, path = '') => {
  const settings = path ? get(cloneDeep(from), path) : cloneDeep(from);

  return typeof settings === 'function'
    ? settings(cloneDeep(context))
    : settings;
};
