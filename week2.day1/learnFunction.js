// normal function
/*function cookPizza(){
    console.log("Pizza is ready..!");
}

// function with parameter
function cookPizza(type){
    console.log(type+" Pizza is ready..!");
}

// function expression
var howMany = function cookPizza(num){
    console.log("Cook "+num+" pizzas");
}*/

// Arrow function
howMany = (num)=> {
    console.log("Cook "+num+" pizzas");
} 

howMany = (num, type)=> {
    console.log("Cook "+num+" "+type+" pizzas");
} 

howMany(3)