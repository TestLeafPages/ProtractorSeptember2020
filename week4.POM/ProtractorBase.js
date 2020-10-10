const driver = require("protractor")

/**
 * @author Sam
 * @description POM Framework
 */

class ProtractorBase {

    locateElement(locatorName, locatorValue){
        try {
            switch (locatorName) {
                case "id":
                    return driver.element(driver.by.id(locatorValue));
                    break;
                case "name":
                    return driver.element(driver.by.name(locatorValue))
                    break;
                case "linkText":
                    return driver.element(driver.by.linkText(locatorValue))
                    break;
                case "xpath":
                    return driver.element(driver.by.xpath(locatorValue))
                    break;
                case "cssContaining":
                    return driver.element(driver.by.cssContainingText(locatorValue))
                    break;
                case "class":
                    return driver.element(driver.by.className(locatorValue))
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    }

    maximizeBrowser(){
        driver.browser.manage().window().maximize()
    }

}

exports.ProtractorBase = ProtractorBase;