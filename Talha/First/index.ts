console.log("My first project of nodejs");

var Name:string = "Muhammad Talha Adnan";
console.log(Name.indexOf("a"));

//array
let myNumbers:number[] = [77,88,99,44,55,66];
console.log(myNumbers[1]);

//forloop
for (let index:number = 0; index < myNumbers.length; index++) {
    let element = myNumbers[index];
    console.log(index + "=>" + element);
}
 

// Adition
function add(a: number, b: number): number {
    return a + b;
}

// Example usage
const result = add(5, 10);
console.log(result);




//Subtraction
function Sub(a: number, b: number): number {
    return a - b;
}

// Example usage
const results = Sub(5, 10);
console.log(results);

