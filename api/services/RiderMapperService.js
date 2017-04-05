/**
 * RiderMapperService, keeps all the business rules for riders
 *
 * @required {Array} devices
 *   All the devices to send a message
 * @required {Function} done
 *   The callback to async process
 */

const ObjectMapper = require('two-way-object-mapper');

module.exports = {

  build: (() => {
    let mapper;

    const instance = function instance() {
      return new ObjectMapper()
        .addPropertyMapping({
          from: 'id',
          to: 'id'
        })
        .addPropertyMapping({
          from: 'email',
          to: 'email'
        })
        .addPropertyMapping({
          from: 'firstName',
          to: 'firstName'
        })
        .addPropertyMapping({
          from: 'lastName',
          to: 'lastName'
        })
        .addPropertyMapping({
          from: 'secret',
          to: 'secret'
        });
    };

    return {
      mapping() {
        if (!mapper) {
          mapper = instance();
        }

        return mapper;
      }
    };
  })()

};
