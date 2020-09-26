
var pizza = 0;

function cookPizza(n) {
    if (n == 0) {
        console.log(pizza + " pizza is ready");
    } else {
        pizza ++;
        return cookPizza(n-1);
    }
}

cookPizza(5)
