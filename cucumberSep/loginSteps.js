const { Given, When, Then } = require("cucumber");
const driver = require("protractor")
var { setDefaultTimeout }= require("cucumber")
setDefaultTimeout(60 * 1000)

Given("Launch the application", ()=>{
    driver.browser.waitForAngularEnabled(false)
    driver.browser.get("http://leaftaps.com/opentaps/control/main")
})

Given("Maximize the browser", ()=>{
    driver.browser.manage().window().maximize()
})

Given("Set the timeouts", ()=>{
    driver.browser.manage().timeouts().implicitlyWait(3000)
})

Given("Enter the username", ()=>{
    driver.element(driver.by.id("username")).sendKeys("demosalesmanager")
})

Given("Enter the password", ()=>{
    driver.element(driver.by.id("password")).sendKeys("crmsfa")
})

When("Click the login button", ()=>{
    driver.element(driver.by.className("decorativeSubmit")).click()
})

Then("Verify the login success", async ()=>{
    driver.browser.sleep(3000)
    console.log(await driver.element(driver.by.tagName("h2")).getText());
})