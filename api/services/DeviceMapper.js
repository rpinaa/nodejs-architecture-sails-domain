/**
 * DeviceMapper, keeps all the mapper needs for Device model
 *
 */

const ObjectMapper = require('two-way-object-mapper');

module.exports = {

  build: (() => {
    return new ObjectMapper()
      .addPropertyMapping({
        from: 'id',
        to: 'id'
      })
      .addPropertyMapping({
        from: 'serial',
        to: 'serial'
      });
  })()

};
