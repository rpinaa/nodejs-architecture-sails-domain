/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.http.html
 */

module.exports.http = {

  /****************************************************************************
   *                                                                           *
   * Express middleware to use for every Sails request. To add custom          *
   * middleware to the mix, add a function to the middleware config object and *
   * add its key to the "order" array. The $custom key is reserved for         *
   * backwards-compatibility with Sails v0.9.x apps that use the               *
   * `customMiddleware` config option.                                         *
   *                                                                           *
   ****************************************************************************/

  middleware: {

    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP request. (the Sails *
     * router is invoked by the "router" middleware below.)                     *
     *                                                                          *
     ***************************************************************************/

    order: [
      'startRequestTimer',
      'cookieParser',
      'myRequestLogger',
      'skipper',
      'handleBodyParserError',
      'compress',
      'router',
      'www',
      'favicon',
      '404',
      '500'
    ],
    myRequestLogger(req, res, next) {
      console.log("Requested :: ", req.method, req.url);

      return next();
    },
    skipper: require('skipper')({
      maxWaitTimeBeforePassingControlToApp: 1000
    }),
    handleBodyParserError(err, req, res, next) {

      res.status(err.statusCode);
      res.send({
        message: '000',
        stack: err.body
      });
    },
    '404'(req, res, next) {

      res.status(404);
      res.send({
        message: '000',
        stack: 'NotFoundError'
      });
    },
    '500'(err, req, res, next) {

      const _err = err || {
          message: '000',
          stack: 'ServerError'
        };

      res.status(500);
      res.send(_err);
    }

  },
  cache: 31557600000
};
