/**
 * CypherService, implements hash and cypher algorithms
 *
 */

const crypto = require('crypto');

module.exports = {

  hash(data) {
    return crypto.createHmac('sha256', '34u%&i')
      .update(data).digest('hex');
  }

};
