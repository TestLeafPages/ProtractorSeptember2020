const loginPage = require("./LoginPage")
const readExcel = require("./utils/readExcel")
const driver = require("protractor")

describe("TC001", ()=>{

    before(()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leaftaps.com/opentaps/control/main")
    })

    new readExcel.readExcel().getExcelData("./utils/TC001.xlsx", "Sheet1").forEach(data => {

    it("Login", ()=>{
        new loginPage.Login()
        .launchApp()
        .enterUsername(data.Username)
        .enterPassword(data.Password)
        .clickLogin();
        // .verifyText()
    })

    after(()=>{
        driver.browser.close()
    })

})

})