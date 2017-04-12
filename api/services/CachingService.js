/**
 * CachingService, keeps all the business rules to catch model between request and response
 *
 */

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
