function bubblesort(arr1) {
    for(let i = 0; i< arr1.length; i++) {
        for(let j = 0; j< arr1.length; j++) {
            if(arr1[j] > arr1[j+1]) {
            let temp = arr1[j];
            arr1[j] = arr1[j+1];
            arr1[j+1] = temp;
            }
        }
    }
    console.log(arr1);
    return arr1;
}
let arr = [2,6,8,1,5,9];
bubblesort(arr);