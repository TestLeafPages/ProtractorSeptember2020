const driver = require("protractor")

exports.config = {
    framework: 'mocha',
    directConnect: true,
    specs: ["./week1.day2/firstScript.js"],
    mochaOpts: {
        timeout: 0,
    }
}
