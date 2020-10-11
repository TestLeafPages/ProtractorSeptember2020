const driver = require("protractor")
const home = require("./HomePage.js")
const base = require("./ProtractorBase.js")

class Login extends base.ProtractorBase{

    launchApp(){
        this.maximizeBrowser()
        driver.browser.manage().timeouts().implicitlyWait(3000)
        return this;
    }

    enterUsername(userName){
        // driver.element(driver.by.id("username")).sendKeys(userName)
        this.type(this.locateElement("id","username"), userName)
        return this;
    }

    enterPassword(data){
        // driver.element(driver.by.id("password")).sendKeys(data)
        this.type(this.locateElement("id","password"), data)
        return this;
    }

    clickLogin(){
        // driver.element(driver.by.className("decorativeSubmit")).click()
        this.click(this.locateElement("class","decorativeSubmit"))
        return this;
    }

}

exports.Login = Login