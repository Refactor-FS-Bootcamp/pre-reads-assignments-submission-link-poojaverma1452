function displayFacto(num) {
    let fact = 1;
    for(let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    console.log(`Factorial of the given number  is:` + fact);

}
displayFacto(5);