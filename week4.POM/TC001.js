const driver = require("protractor")
const loginPage = require("./Login")
const readExcel = require("./utils/readExcel")

describe("TC001", ()=>{

    before("Precondition", ()=>{
        driver.browser.manage().timeouts().implicitlyWait(3000)
    })

    new readExcel.readExcel().getData("./utils/TC001.xlsx","Sheet1").forEach(testData => {
    it("Login", ()=>{
            // const login = new loginPage.Login()
            new loginPage.Login()
            .maximizeTheApp()
            .enterUsername()
            .enterPassword()
            .clickLogin()
            .verifyLogin();
        }) 
    });

    after("Postcondition", ()=>{
        driver.browser.close()
    })

})