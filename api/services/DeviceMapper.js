/**
 * DeviceMapperService, keeps all the business rules for riders
 *
 * @required {Array} devices
 *   All the devices to send a message
 * @required {Function} done
 *   The callback to async process
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
