const { Before, After } = require("cucumber");
const driver = require("protractor")

Before(async ()=>{
    await driver.browser.waitForAngularEnabled(false)
})

After(async ()=>{
    await console.log("We're done with the testcase")
})