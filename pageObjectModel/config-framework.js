exports.config={
    framework:"mocha",
    directconnect : true,
    specs:["TC001.js"],
    // restartBrowserBetweenTests: true,
    mochaOpts:{
        timeout:0, 
        reporter: "mocha-allure-reporter"
        // reporterOptions: {targetDir:"./allure-results"}
    }

}