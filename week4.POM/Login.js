const driver = require("protractor")
const base = require("./ProtractorBase")
const home = require("./HomePage")

class LoginPage extends base.ProtractorBase {

    maximizeTheApp(){
        this.maximizeBrowser();
        return this;
    }

    enterUsername(){
        var eleUsername = this.locateElement("id", "username");
        eleUsername.sendKeys("demosalesmanager")
        return this;
    }

    enterPassword(){
        var elePassword = this.locateElement("id","password");
        elePassword.sendKeys("crmsfa");
        return this;
    }

    clickLogin(){
        var eleLoginButton = this.locateElement("class", "decorativeSubmit");
        eleLoginButton.click();
        return new home.HomePage();
    }

}

exports.Login = LoginPage