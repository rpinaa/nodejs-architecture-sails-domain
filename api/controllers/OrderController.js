/**
 * OrderController
 *
 * @description :: Server-side logic for managing Orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  createOrder(request, response) {

    const idRider = request.param('idRider');
    const order = OrderMapper.build.map(request.body.order);

    ValidatorService.validate(order, Order.rules.create.order);

    OrderService.createOrder(idRider, order, (err) => err ? response.serverError(err) : response.ok());
  }
};

