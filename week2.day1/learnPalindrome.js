var data = "madam";

var reversedString = data.split("").reverse().join("")
console.log(data);
console.log(reversedString);

if (data == reversedString) {
    console.log("It is a palindrome");
} else {
    console.log("Not a palindrome");
}