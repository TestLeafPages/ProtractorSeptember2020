const driver = require("protractor")
const reporters = require("./Reporters")

/**
 * @author Sam David Lazarus
 * @description Basic FrameWork
 */
class ProtractorBase extends reporters {
    
    locateElement(locatorName, locatorValue){
        try {
            switch (locatorName) {
                case "id":
                    return driver.element(driver.by.id(locatorValue))
                    break;
                case "name":
                    return driver.element(driver.by.name(locatorValue))
                    break;
                case "css":
                    return driver.element(driver.by.css(locatorValue))
                    break;
                case "cssContainingText":
                    return driver.element(driver.by.cssContainingText(locatorValue))
                    break;
                case "class":
                    return driver.element(driver.by.className(locatorValue))
                    break;
                case "linkText":
                    return driver.element(driver.by.linkText(locatorValue))
                    break;
                case "partialLinkText":
                    return driver.element(driver.by.partialLinkText(locatorValue))
                    break;
                case "buttonText":
                    return driver.element(driver.by.buttonText(locatorValue))
                    break;
                case "partialButtonText":
                    return driver.element(driver.by.partialButtonText(locatorValue))
                    break;
                case "xpath":
                    return driver.element(driver.by.xpath(locatorValue))
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * @description maximizes the browser
     */
    maximizeBrowser(){
        browser.manage().window().maximize()
    }

    /**
     * @description to set implicitlyWait
     */
    applyImpliWait(waitTime){
        driver.browser.manage().timeouts().implicitlyWait(waitTime)
    }

    /**
     * @param index - This is the index for the frame
     * @description switch to frame using 0 based index
     */
    switchToframeUsingIdex(index) {
        browser.switchTo().frame(index)
        this.takeSnap()
    }

    /**
     * @param webElement 
     * @description switch to frame using WebElement
     */
    switchToFrameUsingWebElement(webElement) {
        browser.switchTo().frame(webElement)
        this.takeSnap()
    }

    /**
    * @param  windowNumber
    * @description switch to window
    */
    async switchToWindow(windowNumber) {
        let windows = await browser.getAllWindowHandles();
        browser.switchTo().window(windows[windowNumber]);
        this.takeSnap()
    }

    /**
     * @param  element
     * @description Click on WebElement
     */
    click(element) {
        element.click()
        // this.takeSnap()
    }

    /**
     * @param ele 
     * @param text 
     * @description type on an input field, By default it appends the value
     */
    type(ele, text) {
        ele.sendKeys(text)
        // this.testStep()
        this.takeSnap()
    }

    /**
     * @param  ele 
     * @param  text 
     *  @description clear the field type on an input box
     */
    clearAndtype(ele, text) {
        ele.clear()
        ele.sendKeys(text)
        this.takeSnap()
    }

    /**
     * @param {WebElement}
     * @description Get Text from WebElement
     */
    async getText(ele) {
        return await ele.getText()
        this.takeSnap()
    }

    /**
     * @description Accepts an alert
     */
    acceptAlert() {
        browser.switchTo().alert().accept()
        this.takeSnap()
    }

    /**
    * @description Dismiss an alert
    */
    dismissAlert() {
        browser.switchTo().alert().dismiss()
        this.takeSnap()
    }

    /**
    * @description Type and accepts in alert
    */
    typeInAlert(text) {
        let alert = browser.switchTo().alert();
        alert.sendKeys(text)
        alert.accept()
        this.takeSnap()
    }

    /**
    * @description Get alert text
    */
    async getAlertText() {
        return await browser.switchTo().alert().getText()
        this.takeSnap()
    }

    /**
     * return title of the page
     */
    async getTitle() {
        return await browser.getTitle();
        this.takeSnap()
    }

}
exports.ProtractorBase = ProtractorBase;