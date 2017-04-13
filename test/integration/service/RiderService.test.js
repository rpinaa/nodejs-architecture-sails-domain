const assert = require('assert');

describe('RiderService Unit Testing :: ', () => {
  let rider;

  before(() => {
    rider = {
      "email": "pinaarellano0@gmail.com",
      "firstName": "Ricardo Pina",
      "lastName": "Arellano"
    };
  });

  it('registerRider method must be executed successful with secret and error equal to null', () => {
    sails.services.riderservice.registerRider(rider, (error, data) => {

      assert(data.id);
      assert(data.email);
      assert(data.firstName);
      assert(data.lastName);
      assert(data.status);
      assert(data.secret === null);
      assert(error === null);
    });
  });
});
