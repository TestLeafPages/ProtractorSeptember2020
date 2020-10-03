

class BBQHO {
    
    constructor(){
        console.log(" We give free compliments");
    }

    isOpen = true;

    chicken() {
        console.log("Chicken is ready");
    }

    static bill() {
        console.log("Here is your bill");
    }

    fish(type){
        console.log(type+" Fish is ready");
    }

}

const obj = new BBQHO();
obj.chicken();
obj.fish("BBQ");
BBQHO.bill();


module.exports = BBQHO


