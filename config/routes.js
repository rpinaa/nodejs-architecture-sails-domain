module.exports.routes = {
  'GET /orders': {
    controller: 'OrderController',
    action: 'findOrders',
    swagger: {
      methods: ['GET'],
      summary: 'Get Orders',
      description: 'Get Orders Description',
      produces: ['application/json'],
      tags: ['Orders'],
      responses: {
        '200': {
          description: 'List of Orders',
          schema: 'Order',
          type: 'array'
        }
      },
      parameters: []
    }
  },
};
