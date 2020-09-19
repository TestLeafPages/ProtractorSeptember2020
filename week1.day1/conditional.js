var age = 16;
var gender = "female";

if (age < 13) {
    if (gender == "male") {
        console.log("Boy");
    }else{
        console.log("Girl");
    }
} else if(age > 12 && age < 20){
    console.log("Teens");
} else {
    console.log("Adult");
}