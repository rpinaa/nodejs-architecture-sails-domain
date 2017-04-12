/**
 * RiderMapper, keeps all the mapper needs for Rider model
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
  })()

};
