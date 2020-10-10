const driver = require("protractor")
const base = require("./ProtractorBase")
const chai = require("chai").expect

class HomePage extends base.ProtractorBase{

    async verifyLogin(){
        var text = await driver.element(driver.by.tagName("h2")).getText()
        console.log(text);
    }

}

exports.HomePage = HomePage