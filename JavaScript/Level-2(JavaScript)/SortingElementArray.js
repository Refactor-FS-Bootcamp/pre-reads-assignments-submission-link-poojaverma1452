let array = [10,3,6,7,2,9];
for(let i=0; i<array.length; i++) {
    for(let j=i+1; j<array.length; j++) {
        if(array[i] > array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

    }
}
console.log("Sorted array:" +array);