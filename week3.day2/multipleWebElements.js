describe("Multiple WebElements", ()=>{
    it("Multiple WebElements", ()=>{
        // Getting multiple webelements
        var arr = await driver.element.all(driver.by.id("username")).getWebElements()
        arr.forEach(each => {
            console.log(each.getText());
        })
    })
})