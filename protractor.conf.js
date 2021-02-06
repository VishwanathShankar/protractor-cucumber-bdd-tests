exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'e2e/features/*.feature'
  ],
  cucumberOpts: {
    require: 'e2e/steps/*_steps.js',
    format: 'pretty'
  }
}
