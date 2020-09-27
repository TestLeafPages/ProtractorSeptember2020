const driver = require("protractor")

describe("LeafGround", ()=>{
    it("Frames", ()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/frame.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)
        var frameEle = driver.element(driver.by.xpath("(//div[@id='wrapframe']/iframe)[1]"))
        driver.browser.switchTo().frame(frameEle)
        driver.element(driver.by.buttonText("Click Me")).click()

    })
})