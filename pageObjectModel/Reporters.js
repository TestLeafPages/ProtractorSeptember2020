class Reporters {

    async takeSnap(){
        const png = await browser.takeScreenshot();
        allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
    }

}

module.exports = Reporters