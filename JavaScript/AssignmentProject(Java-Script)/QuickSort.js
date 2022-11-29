function quicksort(arr1) {
    if(arr1.length < 2) {
        return arr1;
    }
    let pivot = arr1[arr1.length -1];
    let left = [];
    let right = [];
    for(let i =0; i<arr1.length-1; i++) {
        if(arr1[i] > pivot) {
            right.push(arr1[i]);
        } else {
            left.push(arr1[i]);
        }

    }
    return[...quicksort(left), pivot, ...quicksort(right)];
}
let arr = [10,32,50,3,20,30];
console.log(quicksort(arr));