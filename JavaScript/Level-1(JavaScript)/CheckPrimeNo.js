function checkPrime(num) {
    let temp =0;
    for(let i =2; i<=(num-1); i++) {
        if(num % i === 0) {
            temp = temp + 1;
        }
    }
    
    if(temp > 0) {
        console.log(`The number is  not prime: `+ num);
    } else {
    console.log(`The number is prime: `+ num);
    }
}
    checkPrime(4);