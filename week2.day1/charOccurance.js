let restaurantName = "Sangeetha";  //S - 1, a -1
// s,a,n,g,e,e,t,h,a
let occ = restaurantName.split("")
let charOcc = new Map();

occ.forEach(eachChar => {
    if (charOcc.has(eachChar)) {
        let count = charOcc.get(eachChar) + 1;
        charOcc.set(eachChar, count)
    } else {
        charOcc.set(eachChar, 1);
    }
})

console.log(charOcc);