const driver = require("protractor")
const base = require("./ProtractorBase.js")

class Home extends base.ProtractorBase {

    async verifyText(){
        // console.log(await driver.browser.getTitle())
        console.log(await this.getTitle());
    }

}

exports.Home = Home