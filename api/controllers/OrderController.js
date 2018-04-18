/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 */

module.exports = {
  async findOrders(request, response) {
    response.send(await Order.find().populate('address'));
  }
};
