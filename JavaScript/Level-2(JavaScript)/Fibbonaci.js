function displayFibo(num) {
    let n1 = 0, n2 = 1, n3;
    console.log(`fibbonaci number starting with`);
    console.log(`${n1}`);
    console.log(`${n2}`);
    for(let i =1; i<num; i++) {
        n3 = n1 + n2;
        console.log(n3 );
        n1 = n2;
        n2 = n3;
    }
    }
displayFibo(6);