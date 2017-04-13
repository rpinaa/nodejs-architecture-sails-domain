const assert = require('assert');

describe('DeviceService Unit Testing :: ', () => {

  it('createDevice method must throw and error with message 100', () => {
    sails.services.deviceservice.createDevice(1, {}, (error, data) => {

      assert(data === undefined);
      assert(error.message === '100');
    });
  });
});
