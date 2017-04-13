const sails = require('sails');

before((done) => {
  sails.lift({
    log: {
      level: 'error'
    },
    hooks: {
      grunt: false,
      views: false,
      blueprints: false
    },
    migrate: 'drop'
  }, done);
});

after((done) => {
  sails.once('hook:orm:reloaded', done);
  sails.emit('hook:orm:reload');

  sails.lower(done);
});
