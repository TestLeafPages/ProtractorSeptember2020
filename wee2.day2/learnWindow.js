const driver = require("protractor")

describe("LeafGround", ()=>{
    it("Window Handles",async ()=>{

        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/Window.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.element(driver.by.buttonText("Open Multiple Windows")).click()

        var windows = await driver.browser.getAllWindowHandles()

        // console.log(windows);
        driver.browser.switchTo().window(windows[0])

        console.log(await driver.browser.getTitle());

    })
})