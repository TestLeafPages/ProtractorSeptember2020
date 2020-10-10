const driver = require("protractor")

exports.config = {
    framework: "mocha",
    directconnect: true,
    capabilities: {
        browserName: "chrome",
        sharedTestFiles: true,
        maxInstances: 2
    },
    specs: ["TC001.js"],
    // restartBrowserBetweenTests: true,
    mochaOpts:{
        timeout: 0
    },

    onPrepare: function setUp(){
        driver.browser.waitForAngularEnabled(false);
        driver.browser.get("http://leaftaps.com/opentaps/control/main")
    }
}