const driver = require("protractor")

describe("Learn Exception Handling", ()=>{
    it("Handle Alerts", ()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/Alert.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.element(driver.by.buttonText("Alert Box!")).click().then(null, (err)=>{
            console.log(err.name);
        })

        driver.browser.sleep(4000)
    })
})