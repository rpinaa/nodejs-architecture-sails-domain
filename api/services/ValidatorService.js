/**
 * ValidatorService, keeps all the business rules to validate model constraints
 *
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
