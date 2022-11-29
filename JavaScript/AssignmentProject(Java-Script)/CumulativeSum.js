function cumulativeSum(arr) {
    for(let i =1 ; i< arr.length; i++) {
        let newSum = arr[i] + arr[i - 1];
        arr[i] = newSum;
    }
    return arr;
} 
let arr = [1,3,4,6,7,3,2];
console.log(cumulativeSum(arr));

