console.log("My first project of nodejs");
var Name = "Muhammad Talha Adnan";
console.log(Name.indexOf("a"));
//array
var myNumbers = [77, 88, 99, 44, 55, 66];
console.log(myNumbers[1]);
//forloop
for (var index = 0; index < myNumbers.length; index++) {
    var element = myNumbers[index];
    console.log(index + "=>" + element);
}
// Adition
function add(a, b) {
    return a + b;
}
// Example usage
var result = add(5, 10);
console.log(result);
//Subtraction
function Sub(a, b) {
    return a - b;
}
// Example usage
var results = Sub(5, 10);
console.log(results);
