const { after } = require("mocha")
const driver = require("protractor")

describe("Learn Hooks", ()=>{

    beforeEach("Precondition", ()=>{
        driver.browser.get("https://juliemr.github.io/protractor-demo/")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)
    })

    it("Addition Calculator", async ()=>{    
        driver.element(driver.by.model("first")).sendKeys("5")
        driver.element(driver.by.model("second")).sendKeys("6")
        driver.element(driver.by.buttonText("Go!")).click()
        var text = driver.element(driver.by.tagName("h2")).getText()
    })

    xit("Addition Calculator", ()=>{    
        driver.element(driver.by.model("first")).sendKeys("10")
        driver.element(driver.by.model("second")).sendKeys("20")
        driver.element(driver.by.buttonText("Go!")).click()
        
    })

    afterEach("Postcondition",async ()=>{
        var text = driver.element(driver.by.tagName("h2")).getText()
        console.log(await text);
    })

})