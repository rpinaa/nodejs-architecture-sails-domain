const cache = require('sailsjs-cacheman');
const cacheQueue = {};

module.exports = {

  setCatchable(name) {
    if (!cacheQueue[name]) {
      cacheQueue[name] = cache.sailsCacheman(name);
    }
  },
  getCatchable(name) {
    return cacheQueue[name];
  }

};
