const swaggerTools = require('swagger-tools');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('api/swagger/swagger.yaml');

module.exports.http = {
  middleware: {
    order: [
      'cookieParser',
      'session',
      'bodyParser',
      'compress',
      'poweredBy',
      'customMiddleware',
      'www',
      'favicon',
    ],
    customMiddleware(app) {
      swaggerTools.initializeMiddleware(swaggerDoc, middleware => app.use(middleware.swaggerUi()));
    }
  },
};
