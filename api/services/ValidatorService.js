/**
 * ValidatorService, custom validator for business rules
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const validator = require('Validator');

module.exports = {

    validate: function validate(model, constraints) {

        const validation = validator.make(model, constraints);

        if (validation.fails()) {
            sails.log.warn(validation.getErrors());

            throw ErrorService.build("002", validation.getErrors());
        }
    }

};
