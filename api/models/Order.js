/**
 * Order.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 */

module.exports = {
  tableName: 'order',
  attributes: {
    name: {
      type: 'string',
      columnName: 'name'
    },
    latitude: {
      type: 'string',
      columnName: 'latitude'
    },
    longitude: {
      type: 'string',
      columnName: 'longitude'
    },
    description: {
      type: 'string',
      columnName: 'description'
    },
    status: {
      type: 'string',
      columnName: 'status'
    },
    erased: {
      type: 'boolean',
      columnName: 'erased',
    },
    address: {
      model: 'address'
    },
  },
};

