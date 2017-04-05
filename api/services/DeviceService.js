/**
 * DeviceService, keeps all the business rules for riders
 *
 * @required {Array} devices
 *   All the devices to send a message
 * @required {Function} done
 *   The callback to async process
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

        Device.findOne({serial: device.serial})
          .exec((err, data) => {
            err ? callback(ErrorService.build('100')) : callback(null, data);
          });
      },
      (currentDevice, callback) => {

        if (currentDevice) {
          if (!currentDevice.riders.find(id => id === idRider)) {
            currentDevice.riders.push(idRider);

            Device.update({id: currentDevice.id}, currentDevice)
              .exec((err) => callback(err ? ErrorService.build('201') : null));
          } else {
            callback();
          }
        } else {
          device.riders = idRider;

          Device.create(device)
            .exec((err) => callback(err ? ErrorService.build('201') : null));
        }
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

        Device.findOne({id: idDevice, riders: [idRider]})
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

        Device.find({riders: [idRider]})
          .exec((err, devices) => {

            if (err) {
              return callback(ErrorService.build('100'));
            }

            CachingService.getCatchable('devices')
              .set(idRider, {devices});

            callback(null, {devices});
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

        Device.findOne({id: idDevice, riders: {'contains': idRider}})
          .exec((err, device) => {
            err ? callback(ErrorService.build('100')) : callback(null, device);
          });
      },
      (device, callback) => {

        if (device) {
          device.riders.splice(device.riders.indexOf(idRider), 1);

          Device.update({id: idDevice}, device)
            .exec((err) => callback(err ? ErrorService.build('201') : null));
        } else {
          callback(ErrorService.build('100'));
        }
      }
    ], done);
  }

};
