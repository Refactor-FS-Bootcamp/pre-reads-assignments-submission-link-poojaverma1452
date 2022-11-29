function findMissedNum(arrayOfNumbers, n = 100) {
    if(arrayOfNumbers.length === n) {
      console.log("no number is missed");
    }
    if(arrayOfNumbers.length < (n - 1) ) {
      console.log("more than one number is missed")
    }
    let totalSum = (n * (n+1)) / 2;
    let sumOfArray = 0;
    
    for(let i of arrayOfNumbers){
        sumOfArray += i;
    }
    
    return totalSum - sumOfArray;
}

let num = [1,2,3,4,5,7,8,9,10]

let missedNum = findMissedNum(num, 10);
console.log("The missing number is :", missedNum)