const driver = require("protractor")
const file = require("fs")

describe("LeafGround", ()=>{
    it("Window Handles",async ()=>{

        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/Window.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.browser.takeScreenshot().then(img => {
            var stream = file.createWriteStream("./img/001.jpg")
            stream.write(new Buffer('base64'))
            stream.end()
        })

    })
})