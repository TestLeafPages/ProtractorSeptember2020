const driver = require("protractor")
const assert = require("chai").assert

describe("Automate Calculator", ()=>{
    xit("Addition Functionality", ()=>{

        // driver.browser.waitForAngularEnabled(false)
        driver.browser.get("https://juliemr.github.io/protractor-demo/")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.element(driver.by.model("first")).sendKeys("10")

        // driver.element(driver.by.model("operator")).element(driver.by.css('value="ADDITION"')).click()

        driver.element(driver.by.cssContainingText("option", "-")).click()

        // driver.element(driver.by.model("operator")).$('[value="ADDITION"]').click()

        driver.element(driver.by.model("second")).sendKeys("5")

        // driver.element(driver.by.id("gobutton")).click()
        driver.element(driver.by.buttonText("Go!")).click()
        driver.element(driver.by.className("ng-binding")).getText().then(function text(data) {
            // expect(data).not.to.equal("5")
            assert.lengthOf(data, 6, "It's required to have 6 data")
        })
        
        // console.log(await text);
    })

    it("LeafGround", async ()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/radio.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.element(driver.by.id("yes")).click()
        var result = driver.element(driver.by.id("yes")).isSelected()
        console.log(await result);
        driver.browser.sleep(3000)

    })

})














