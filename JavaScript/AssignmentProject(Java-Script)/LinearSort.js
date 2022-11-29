function linearSearch(arr){
    let n = 67;
    let pos;
    for(let i =0; i< arr.length; i++) {
        if(arr[i] == n) {
            //
            pos = i;
            break;
        }
    }
    if(pos == -1) {
        console.log("searching unsuccessful");
        return "searching unsuccessful";
    } else {
        return "i+1";
    }
}
let arr = [10,20,3,6,67,34,82];
console.log(linearSearch(arr));