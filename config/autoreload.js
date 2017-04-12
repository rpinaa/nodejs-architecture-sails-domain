module.exports.autoreload = {

  active: false,
  usePolling: true,
  overrideMigrateSetting: false,
  dirs: [
    'api/models',
    'api/controllers',
    'api/services',
    'config/locales'
  ],
  ignored: [
    '**.ts'
  ]
};
