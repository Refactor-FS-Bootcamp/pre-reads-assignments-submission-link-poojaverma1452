function reverseString(str, str1) {
    if (str.length === str1.length) {
        return str1;
    }
    str1 += str[(str.length -1) - str1.length];
    return reverseString(str, str1);
}
console.log(reverseString("Pooja", ""));