/**
 * RiderService, keeps all the business rules for riders
 *
 * @required {Array} devices
 *   All the devices to send a message
 * @required {Function} done
 *   The callback to async process
 */

module.exports = {

  registerRider(rider, done) {

    async.waterfall([
      (callback) => {

        CachingService.getCatchable('riders')
          .clear((err) => {
            callback(err ? ErrorService.build('100') : null);
          });
      },
      (callback) => {

        rider.secret = null;
        rider.status = 'pending';

        //TODO: Implement validating email and profile, sending email

        Rider.create(rider)
          .exec((err, data) => err ? callback(ErrorService.build('100')) : callback(null, data));
      }
    ], done);
  },
  createRider(rider, done) {

    async.waterfall([
      (callback) => {

        CachingService.getCatchable('riders')
          .clear((err) => {
            callback(err ? ErrorService.build('100') : null);
          });
      },
      (callback) => {

        Rider.findOne({id: rider.id, erased: false})
          .exec((err, data) => {
            err ? callback(ErrorService.build('200')) : callback(null, data);
          });
      },
      (currentRider, callback) => {

        if (currentRider.status !== 'pending') {
          return callback(ErrorService.build('200'));
        }

        //TODO: Implement congratulations email

        rider.status = 'enabled';
        rider.secret = CypherService.hash(rider.secret);

        Rider.update({id: rider.id}, rider)
          .exec((err) => callback(err ? ErrorService.build('201') : null));
      }
    ], done);
  },
  getRider(idRider, done) {

    async.waterfall([
      (callback) => {

        CachingService.getCatchable('riders')
          .get(idRider, (err, data) => {
            err ? callback(ErrorService.build('100')) : callback(null, data);
          });
      },
      (data, callback) => {

        if (data) {
          return callback(null, data);
        }

        Rider.findOne({id: idRider, erased: false})
          .exec((err, rider) => {

            if (err) {
              return callback(ErrorService.build('100'));
            }

            CachingService.getCatchable('riders')
              .set(idRider, {rider});

            callback(null, {rider})
          });
      }
    ], done);
  },
  getRiders(params, done) {

    async.waterfall([
      (callback) => {

        CachingService.getCatchable('riders')
          .get([params.page, params.limit], (err, data) => {
            err ? callback(ErrorService.build('100')) : callback(null, data);
          });
      },
      (data, callback) => {

        if (data) {
          return callback(null, data);
        }

        Rider.find({sort: 'createdAt DESC'})
          .paginate(params)
          .exec((err, riders) => {

            if (err) {
              return callback(ErrorService.build('100'));
            }

            CachingService.getCatchable('riders')
              .set([params.page, params.limit], {riders});

            callback(null, {riders});
          });
      }
    ], done);
  },
  updateRider(rider, done) {

    async.waterfall([
      (callback) => {

        CachingService.getCatchable('riders')
          .clear((err) => {
            callback(err ? ErrorService.build('100') : null);
          });
      },
      (callback) => {

        Rider.findOne({id: rider.id, erased: false})
          .exec((err, data) => {
            err ? callback(ErrorService.build('200')) : callback(null, data);
          });
      },
      (currentRider, callback) => {

        if (currentRider.status !== 'enabled') {
          return callback(ErrorService.build('202'));
        }

        rider.email = currentRider.email;
        rider.secret = currentRider.secret;

        Rider.update({id: rider.id}, rider)
          .exec((err) => callback(err ? ErrorService.build('201') : null));
      }
    ], done);
  },
  deleteRider(idRider, done) {

    async.waterfall([
      (callback) => {

        CachingService.getCatchable('riders')
          .del(idRider, (err) => {
            callback(err ? ErrorService.build('100') : null);
          });
      },
      (callback) => {

        Rider.findOne({id: idRider, erased: false})
          .exec((err, data) => {
            err ? callback(ErrorService.build('200')) : callback(null, data);
          });
      },
      (currentRider, callback) => {

        rider.erased = true;

        Rider.update({id: id}, rider)
          .exec((err) => callback(err ? ErrorService.build('201') : null));
      }
    ], done);
  }

};
