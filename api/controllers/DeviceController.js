/**
 * DeviceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See http://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  createDevice(request, response) {

    const idRider = request.param('idRider');
    const device = DeviceMapper.build.map(request.body.device);

    ValidatorService.validate(device, Device.rules.create.device);

    DeviceService.createDevice(idRider, device, (err) => err ? response.serverError(err) : response.ok());
  },
  getDevice(request, response) {

    const idRider = request.param('idRider');
    const idDevice = request.param('idDevice');

    DeviceService.getDevice(idRider, idDevice, (err, data) => err ? response.serverError(err) : response.send(data));
  },
  getDevices(request, response) {

    const idRider = request.param('idRider');

    DeviceService.getDevices(idRider, (err, data) => err ? response.serverError(err) : response.send(data));
  },
  deleteDevice(request, response) {

    const idRider = request.param('idRider');
    const idDevice = request.param('idDevice');

    DeviceService.deleteDevice(idRider, idDevice, (err) => err ? response.serverError(err) : response.ok());
  }

};
