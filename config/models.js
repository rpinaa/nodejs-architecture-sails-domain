module.exports.models = {
  schema: true,
  migrate: 'alter',
  attributes: {
    createdAt: {type: 'number', autoCreatedAt: true,},
    updatedAt: {type: 'number', autoUpdatedAt: true,},
    id: {type: 'number', autoIncrement: true},
  },
  dataEncryptionKeys: {
    default: 'iCyR2sCMsVZ28IUiX3TpiJzRqf5v6N+2ylm8jbYPHRU='
  },
  cascadeOnDestroy: true
};
