/**
 * Rider.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */

const uuid = require('uuid');

module.exports = {

  tableName: 'QR_RIDER',
  autoPK: false,
  attributes: {
    id: {
      type: 'string',
      unique: true,
      primaryKey: true,
      defaultsTo: uuid.v4
    },
    email: {
      type: 'string',
      columnName: 'email'
    },
    firstName: {
      type: 'string',
      columnName: 'first_name'
    },
    lastName: {
      type: 'string',
      columnName: 'last_name'
    },
    secret: {
      type: 'binary',
      columnName: 'secret'
    },
    erased: {
      type: 'boolean',
      columnName: 'erased',
      defaultsTo: 'false'
    },
    status: {
      type: 'string',
      columnName: 'status'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'created_date'
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'updated_date'
    },
    orders: {
      collection: 'order',
      via: 'rider'
    },
    devices: {
      collection: 'device',
      via: 'device',
      through: 'riderdevice'
    },
    toJSON () {

      const obj = this.toObject();

      obj.fullName = this.firstName + ' ' + this.lastName;
      obj.fullName.trim();

      delete obj.secret;
      delete obj.erased;

      return obj;
    }
  },
  rules: {
    register: {
      rider: {
        email: 'required|email|max:50',
        firstName: 'required|regex:/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/|max:80',
        lastName: 'regex:/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/|max:50'
      }
    },
    get: {
      page: 'required|integer|min:1',
      limit: 'required|integer|max:20'
    },
    create: {
      rider: {
        id: 'required',
        status: 'required',
        secret: 'required'
      }
    }
  }

};

