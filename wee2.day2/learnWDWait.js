const driver = require("protractor")

describe("LeafGround", ()=>{
    it("Window Handles",async ()=>{

        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/appear.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        var ele = driver.element(driver.by.xpath("//button[@id='btn']//b[1]"))
        driver.browser.wait(driver.protractor.ExpectedConditions.visibilityOf(ele), 5000)
        console.log(await ele.getText());







    })
})