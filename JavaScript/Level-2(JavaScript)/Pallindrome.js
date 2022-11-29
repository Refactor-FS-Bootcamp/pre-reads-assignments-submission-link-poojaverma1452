function checkPallindrome(str) {
let reverseStr = "";
for(let i = (str.length-1); i>=0; i--) {
    reverseStr = reverseStr + str.charAt(i);
}
if(reverseStr === str) {
    console.log(`the string is pallindrome`);
} else {
    console.log(`the string is not pallindrome`);
}
}
checkPallindrome("DAD");