/**
 * Order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const uuid = require('uuid');

module.exports = {

  tableName: 'QR_ORDER',
  autoPK: false,
  attributes: {
    id: {
      type: 'string',
      unique: true,
      primaryKey: true,
      defaultsTo: uuid.v4
    },
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
      type: 'text',
      columnName: 'description'
    },
    status: {
      type: 'string',
      columnName: 'status'
    },
    erased: {
      type: 'boolean',
      columnName: 'erased',
      defaultsTo: 'false'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'created_date'
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'updated_date'
    },
    rider: {
      model: 'rider',
      columnName: 'id_rider'
    },
    toJSON () {

      const obj = this.toObject();

      delete obj.erased;
      delete obj.rider;

      return obj;
    }
  },
  rules: {
    create: {
      order: {
        name: 'required|regex:/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/|max:10',
        latitude: 'required|numeric|max:90|min:-90',
        longitude: 'required|numeric|max:180|min:-180',
        description: 'required|regex:/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/|max:30'
      }
    },
    get: {
      page: 'required|integer|min:1',
      limit: 'required|integer|max:20'
    }
  }

};

