module.exports.autoreload = {

  active: true,
  usePolling: false,
  overrideMigrateSetting: false,
  dirs: [
    'api/controllers',
    'api/services',
    'config/locales'
  ],
  ignored: [
    '**.ts'
  ]
};
