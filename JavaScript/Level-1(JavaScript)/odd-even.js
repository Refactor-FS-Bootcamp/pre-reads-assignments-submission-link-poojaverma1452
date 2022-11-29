//javascript program to check number is even or odd
function oddEven(num) {
    if(num % 2 === 0) return "Even";
    return "Odd";
}

//let, const, var
let num = 4;
console.log(`the number ${num} is: `, oddEven(num));