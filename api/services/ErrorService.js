/**
 * ErrorService, builder for message and stack descriptions
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    build: function build(message, stack) {
        return {
            message: message || '001',
            stack: stack || 'HandlerError'
        };
    }

};