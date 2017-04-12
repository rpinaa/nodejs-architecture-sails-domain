/**
 * RiderDevice.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const uuid = require('uuid');

module.exports = {

  tableName: 'QR_RIDE_DEVICE',
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
    rider: {
      model: 'rider',
      columnName: 'id_rider'
    },
    device: {
      model: 'device',
      columnName: 'id_device'
    }
  }
};

