/**
 * DeviceService, keeps all the business rules for devices
 *
 */

module.exports = {

  createDevice(idRider, device, done) {

    async.waterfall([
      (callback) => {

        CachingService.getCatchable('devices')
          .del(idRider, (err) => {
            callback(err ? ErrorService.build('100') : null);
          });
      },
      (callback) => {

        Rider.findOne({id: idRider, erased: false})
          .exec((err, data) => {
            err ? callback(ErrorService.build('100')) : callback(null, data);
          });
      },
      (currentRider, callback) => {

        if (!currentRider) {
          return callback(ErrorService.build('100'));
        }

        Device.findOne({serial: device.serial})
          .exec((err, device) => {
            err ? callback(ErrorService.build('100')) : callback(null, device, currentRider);
          });
      },
      (currentDevice, currentRider, callback) => {

        if (currentDevice) {
          currentRider.devices.add(currentDevice.id);
        } else {
          currentRider.devices.add(device);
        }

        currentRider.save({populate: false}, (err) => callback(err ? ErrorService.build('201') : null));
      }
    ], done);
  },
  getDevice(idRider, idDevice, done) {

    async.waterfall([
      (callback) => {

        CachingService.getCatchable('devices')
          .get([idRider, idDevice], (err, data) => {
            err ? callback(ErrorService.build('100')) : callback(null, data);
          });
      },
      (data, callback) => {

        if (data) {
          return callback(null, data);
        }

        Device.findOne({id: idDevice})
          .populate('riders', {where: {id : idRider}})
          .exec((err, device) => {

            if (err) {
              return callback(ErrorService.build('100'));
            }

            CachingService.getCatchable('devices')
              .set([idRider, idDevice], {device});

            callback(null, {device});
          });
      }
    ], done);
  },
  getDevices(idRider, done) {

    async.waterfall([
      (callback) => {

        CachingService.getCatchable('devices')
          .get(idRider, (err, data) => {
            err ? callback(ErrorService.build('100')) : callback(null, data);
          });
      },
      (data, callback) => {

        if (data) {
          return callback(null, data);
        }

        Rider.findOne({id: idRider, erased: false})
          .populate('devices')
          .exec((err, rider) => {

            if (err || !rider) {
              return callback(ErrorService.build('100'));
            }

            CachingService.getCatchable('devices')
              .set(idRider, {devices: rider.devices});

            callback(null, {devices: rider.devices});
          });

      }
    ], done);
  },
  deleteDevice(idRider, idDevice, done) {

    async.waterfall([
      (callback) => {

        CachingService.getCatchable('devices')
          .del([idRider, idDevice], (err) => {
            callback(err ? ErrorService.build('100') : null);
          });
      },
      (callback) => {

        Rider.findOne({id: idRider, erased: false})
          .populate('devices')
          .exec((err, rider) => {
            err ? callback(ErrorService.build('100')) : callback(null, rider);
          });
      },
      (rider, callback) => {

        if (rider && rider.hasOwnProperty('devices')) {
          rider.devices.remove(idDevice);
          rider.save({populate: false}, (err) => callback(err ? ErrorService.build('201') : null));
        } else {
          callback(ErrorService.build('100'));
        }
      }
    ], done);
  }

};
