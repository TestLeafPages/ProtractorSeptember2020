const driver = require("protractor")

describe("LeafGround", ()=>{
    it("Learn Frames",async ()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/frame.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(6000)
        // var frameEle = driver.element(driver.by.xpath("(//div[@id='wrapframe']/iframe)[1]"))
        driver.browser.switchTo().frame(1)
        driver.browser.switchTo().frame("frame2")
        driver.element(driver.by.buttonText("Click Me")).click()
        driver.browser.switchTo().defaultContent()
        var text = driver.element(driver.by.tagName("h1")).getText()
        console.log(await text);
        driver.browser.sleep(3000)
    })
})