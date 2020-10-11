exports.config = {
    // custom framework
    framework: 'custom',
    // connect to the Selenium server
    directConnect: true,
    // protractor cucumber dependency path
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // load the feature file
    specs: ['./login.feature'],
    // load the steps definition file
    cucumberOpts: {
        require: ['./loginSteps.js', './hooks.js']
    }
}