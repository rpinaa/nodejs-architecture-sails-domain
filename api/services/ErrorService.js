/**
 * ErrorService, keeps all the business rules to generate general errors
 *
 */

module.exports = {

    build: function build(message, stack) {
        return {
            message: message || '001',
            stack: stack || 'HandlerError'
        };
    }

};
