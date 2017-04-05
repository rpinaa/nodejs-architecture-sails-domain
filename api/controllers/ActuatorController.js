/**
 * ActuatorController.js
 *
 * @description :: Server-side logic for managing Actuatorcontroller.js
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getHealth(request, response) {

    return response
      .status(200)
      .json({status: 'UP'});
  },
  getInfo(request, response) {

    return response
      .status(200)
      .json({
        app: {
          component: sails.config.package.name,
          description: sails.config.package.description,
          version: sails.config.package.version
        }
      });
  },
  getMetrics(request, response) {

    return response
      .status(200)
      .json({
        mem: process.memoryUsage(),
        uptime: process.uptime()
      });
  }
};
