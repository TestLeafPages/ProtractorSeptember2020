const driver = require("protractor")

describe("Learn Actions", ()=>{
    it("LeafGround", ()=>{

        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/drop.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        var drag = driver.element(driver.by.id("draggable"))
        var drop = driver.element(driver.by.id("droppable"))

        driver.browser.actions().dragAndDrop(drag, drop).perform()

        driver.browser.actions().keyDown(driver.protractor.Key.CONTROL)

        driver.browser.sleep(4000)

    })
})