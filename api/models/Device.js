/**
 * Device.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */

const uuid = require('uuid');

module.exports = {

  tableName: 'QR_DEVICE',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id: {
      type: 'string',
      unique: true,
      primaryKey: true,
      defaultsTo: uuid.v4
    },
    riders: {
      type: 'array',
      columnName: 'riders'
    },
    serial: {
      type: 'string',
      columnName: 'serial'
    },
    toJSON () {

      const obj = this.toObject();

      delete obj.riders;

      return obj;
    }
  },
  rules: {
    create: {
      device: {
        serial: 'required|max:50'
      }
    }
  }

};

