exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'e2e/features/*.feature'
  ],
  cucumberOpts: {
    require: 'e2e/steps/*.js',
    format: "json:e2e-reports/results.json",
  },

  plugins: [
    {
      package: "protractor-simple-cucumber-html-reporter-plugin",
      options: {
        // read the options part
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true

      }
    }
  ]

}
