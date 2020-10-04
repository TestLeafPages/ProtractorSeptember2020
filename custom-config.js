

exports.config = {
    framework: "mocha",
    directConnect: true,
    specs: ["./week3.day2/mochaHooks.js"],
    mochaOpts: {
        timeout: 0
    } , multiCapabilities: [
        {"browserName": "chrome"},
        {"browserName": "firefox",
         "args": ['disable-notifications', '--safe-mode'] }
    ] , chromeOptions: {
         args: ["--headless", "--window-size=800x600"]
    }
    
}
















// const driver = require("protractor")
/*
require("babel-register")({
    presets: ["es2015"]
});
*/
// exports.config = {
//     // set to "custom" instead of cucumber.
//     framework: 'custom',
//     seleniumAddress:"http://localhost:4444/wd/hub",
//     // path relative to the current config file
//     frameworkPath: require.resolve('protractor-cucumber-framework'),

//     // require feature files
//     specs: [
//         './cucumber/*.feature' // accepts a glob
//     ],

//     cucumberOpts: {
//         // require step definitions
//         require: [
//             './cucumber/steps.js' // accepts a glob
//         ]
//     }
// };
//mocha-allure-reporter
//npm install allure-commandline --save-dev
//package.json


    // mochaOpts: {
    //      timeout: 0,
    //      reporter: "mocha-allure-reporter",
    //      reporterOptions: {targetDir:"./allure-results"}
    // }

        // onprepare: function(){
        //     driver.browser.manage().window().maximize()
        //     driver.browser.manage().timeouts().implicitlyWait(30000)
        //     return driver.browser.get("https://marmelab.com/ng-admin-demo/login.html")
        // }
        // capabilities: {
        //     browserName: 'chrome',
        //     shardTestFiles: true,
        //     maxInstances: 2
        // },