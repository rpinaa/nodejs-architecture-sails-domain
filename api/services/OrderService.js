/**
 * OrderService, keeps all the business rules for orders
 *
 */

module.exports = {

  createOrder(idRider, order, done) {

    async.waterfall([
      (callback) => {

        CachingService.getCatchable('orders')
          .clear((err) => {
            callback(err ? ErrorService.build('100') : null);
          });
      },
      (callback) => {

        order.status = 'create';
        order.rider = idRider;

        console.log(order)
        Order.create(order)
          .exec((err, data) => err ? callback(ErrorService.build('100')) : callback(null, data));
      }
    ], done);
  }

};
