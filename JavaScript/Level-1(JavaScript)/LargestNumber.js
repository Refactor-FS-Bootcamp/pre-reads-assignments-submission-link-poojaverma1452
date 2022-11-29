// function largestNo(...numList) {
//     return Math.max(...numList);
// }
// console.log(`The largest number  is: ` + largestNo(9,5,7,10));
function largestNo(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    } else if(num2 > num3 && num2 > num1) {
        return num2;
    } else{
        return num3;
    }
}
console.log(`The largest number  is: ` + largestNo(9,5,7));