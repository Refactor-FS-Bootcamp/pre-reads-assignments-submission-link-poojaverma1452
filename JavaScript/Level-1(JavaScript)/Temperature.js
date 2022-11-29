//java script program to convert temperature from celsius to fahrenheit
function checkTem(celsius){
    const fahrenheit = ((celsius * 9) / 5) + 32;
     return fahrenheit;
}
let celsius = 5;
console.log(`Temperature in fahrenheit of celsius ${celsius}: `+checkTem(celsius));