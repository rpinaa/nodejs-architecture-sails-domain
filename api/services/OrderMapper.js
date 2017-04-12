/**
 * OrderMapperService, keeps all the business rules for riders
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
        from: 'name',
        to: 'name'
      })
      .addPropertyMapping({
        from: 'latitude',
        to: 'latitude'
      })
      .addPropertyMapping({
        from: 'longitude',
        to: 'longitude'
      })
      .addPropertyMapping({
        from: 'description',
        to: 'description'
      })
      .addPropertyMapping({
        from: 'status',
        to: 'status'
      });
  })()

};
