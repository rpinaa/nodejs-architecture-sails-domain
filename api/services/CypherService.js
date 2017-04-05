/**
 * CypherService, implements hash and cypher algorithms
 *
 * @required {Array} devices
 *   All the devices to send a message
 * @required {Function} done
 *   The callback to async process
 */

const crypto = require('crypto');

module.exports = {

  hash(data) {
    return crypto.createHmac('sha256', '34u%&i')
      .update(data).digest('hex');
  }

};
