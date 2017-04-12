/**
 * OrderMapper, keeps all the mapper needs for Order model
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
