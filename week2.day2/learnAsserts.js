const driver = require("protractor")
const assert = require("chai").assert

describe("LeafGround", ()=>{
    it("Assertion", ()=>{

        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        let expectedTitle = "TestLeaf - Selenium Playground"
        let actualTitle = driver.browser.getTitle()  

        // assert.equal(actualTitle, expectedTitle, "Both should not match")
//              ===
        

    })
})