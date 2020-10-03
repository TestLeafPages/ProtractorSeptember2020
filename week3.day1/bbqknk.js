// import
const BBQHO = require("./bbqhq")

class BBQKNK extends BBQHO{

    constructor(){
        super();
        console.log("Celebrate your day with us");
    }

    fish(){
        console.log("Special Fish BBQ");
    }

}

const obj = new BBQKNK();
obj.fish();