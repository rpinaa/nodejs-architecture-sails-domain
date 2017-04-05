/**
 * RiderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See http://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  registerRider(request, response) {

    const rider = RiderMapperService.build
      .mapping()
      .map(request.body.rider);

    ValidatorService.validate(rider, Rider.rules.register.rider);

    RiderService.registerRider(rider, (err) => err ? response.serverError(err) : response.ok());
  },
  createRider(request, response) {

    const rider = RiderMapperService.build
      .mapping()
      .map(request.body.rider);

    ValidatorService.validate(rider, Rider.rules.create.rider);

    RiderService.createRider(rider, (err) => err ? response.serverError(err) : response.ok());
  },
  getRider(request, response) {

    const idRider = request.param('idRider');

    RiderService.getRider(idRider, (err, data) => err ? response.serverError(err) : response.send(data));
  },
  getRiders(request, response) {

    const params = {
      page: request.query.page,
      limit: request.query.limit
    };

    ValidatorService.validate(params, Rider.rules.get);

    RiderService.getRiders(params, (err, data) => err ? response.serverError(err) : response.send(data));
  },
  updateRider(request, response) {

    const rider = RiderMapperService.build
      .mapping()
      .map(request.body.rider);

    ValidatorService.validate(rider, Rider.rules.register.rider);

    RiderService.updateRider(rider, (err) => err ? response.serverError(err) : response.ok());
  }

};
