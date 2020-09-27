const driver = require("protractor")

describe("LeafGround", ()=>{
    it("Learn Alerts",async ()=>{

        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/Alert.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.element(driver.by.buttonText("Prompt Box")).click()

        var alert = driver.browser.switchTo().alert()
        console.log(await alert.getText());
        alert.sendKeys("CTS")
        alert.accept()

        driver.element(driver.by.buttonText("Sweet Alert")).click()

        driver.browser.sleep(3000)
    })

})

