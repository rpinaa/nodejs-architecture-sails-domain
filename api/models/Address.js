/**
 * Address.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 */

module.exports = {
  tableName: 'address',
  attributes: {
    intNumber: {
      type: 'string',
      columnName: 'int_number'
    },
    extNumber: {
      type: 'string',
      columnName: 'ext_number'
    },
    block: {
      type: 'string',
      columnName: 'block'
    },
    number: {
      type: 'string',
      columnName: 'number'
    },
    street: {
      type: 'string',
      columnName: 'street'
    },
    colony: {
      type: 'string',
      columnName: 'colony',
    },
    municipality: {
      type: 'string',
      columnName: 'municipality',
    },
    state: {
      type: 'string',
      columnName: 'state',
    },
    country: {
      type: 'string',
      columnName: 'country',
    },
  },
};
